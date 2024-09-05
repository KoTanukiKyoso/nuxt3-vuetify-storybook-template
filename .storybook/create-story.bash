#参考：https://zenn.dev/iihara/articles/47f8d290455b78

if [ "$#" -ge 3 ]; then
  echo "Usage: $0 <input_folder_path> <output_folder_path>"
  exit 1
fi

input_folder_path=${1:-"./"}
output_folder_path=${2:-$input_folder_path}

input_folder_absolute_path=$(realpath "$input_folder_path")
output_folder_absolute_path=$(realpath "$output_folder_path")

script_dir=$(cd "$(dirname "$0")"; pwd)
PATH="$PATH:$script_dir"
source pathlib.bash
from_output_to_input_relative_path=$(path_get_relative "$output_folder_absolute_path" "$input_folder_absolute_path")

find "$input_folder_path" -type f -name "*.vue" | while read -r vue_file_path; do

  file_name=$(basename -- "$vue_file_path")
  file_name_no_ext="${file_name%.vue}"

  upper_camel_case_file_name=$(echo "$file_name_no_ext" | sed -r 's/(^|_|-)(.)/\U\2\E/g')

  vue_file="${vue_file_path#$input_folder_path}"
  stories_file_path="${output_folder_path}${vue_file%.*}.stories.ts"

  if [ -e "$stories_file_path" ]; then
    echo "Skip: $stories_file_path already exists."
    continue
  fi

  props_output=$(awk '
  BEGIN { flag=0; key=""; value=""; nestLevel=0; print "{"; }

  /props: {/ { flag=1; nestLevel=1; }

  flag {
    if ($1 ~ /^[a-zA-Z0-9]+:$/ && nestLevel == 2) {
      key = substr($1, 1, length($1)-1);
    }
    if ($1 ~ /^default:/) {
      value = $0;
      sub(/[[:space:]]*default:/, "", value);
      sub(/,.*$/, "", value);
      if (value != "") { printf "%*s%s: %s,\n", (nestLevel - 1) * 2, "", key, value; }
    }
    for(i=1; i<=length($0); i++) {
      char = substr($0, i, 1);
      if (char == "{") { nestLevel++; }
      if (char == "}") { nestLevel--; }
    }
    if (nestLevel == 0) exit;
  }
  END { print "  },"; }
  ' $vue_file_path)

  if [[ -n $props_output ]]; then
    args=$props_output
  fi

  define_props_output=$(awk '
  BEGIN { flag=0; key=""; value=""; nestLevel=0; print "{"; }

  /defineProps.*\({/ { flag=1; }

  flag {
    if ($1 ~ /^[a-zA-Z0-9]+:$/ && nestLevel == 1) {
      key = substr($1, 1, length($1)-1);
    }
    if ($1 ~ /^default:/) {
      value = $0;
      sub(/[[:space:]]*default:/, "", value);
      sub(/,.*$/, "", value);
      if (value != "") { printf "%*s%s:%s,\n", (nestLevel - 1) * 2, "", key, value; }
    }
    for(i=1; i<=length($0); i++) {
      char = substr($0, i, 1);
      if (char == "{") { nestLevel++; }
      if (char == "}") { nestLevel--; }
    }
    if (nestLevel == 0) exit;
  }
  END { print "  },"; }
  ' "$vue_file_path")

  if [[ -n $define_props_output ]]; then
    args=$define_props_output
  fi

  with_defaults_output=$(awk '
  BEGIN { flag=0; }
  /withDefaults\(/ { flag=1; next; }
  flag == 1 && /^[^,]+),/ { flag=2; next; }
  flag == 2 {
    print $0;
    if ($0 ~ /^[^}]+}/) {
      exit;
    }
  }
  ' $vue_file_path)
  if [[ -n $with_defaults_output ]]; then
    args=$with_defaults_output
  fi

  cat > "$stories_file_path" <<EOL
import $upper_camel_case_file_name from '${from_output_to_input_relative_path:-.}/$file_name_no_ext.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof $upper_camel_case_file_name>;

const meta: Meta<typeof $upper_camel_case_file_name> = {
  title: '$upper_camel_case_file_name',
  component: $upper_camel_case_file_name,
  // render: (args) => ({
  //   components: { $upper_camel_case_file_name },
  //   setup: () => ({ args }),
  //   template: "<$upper_camel_case_file_name v-bind='args' />",
  // }),
  tags: ['autodocs'],
} as Meta<typeof $upper_camel_case_file_name>;
export default meta;

export const Default: Story = {
  args: $args
};
EOL

  echo "Created: $stories_file_path"
done
