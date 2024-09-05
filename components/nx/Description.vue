<script lang="ts">
export default defineComponent({
  layout: false,
  name: "Description"
});
</script>

<script setup lang="ts">
interface Props {
  text?: string,
  color?: string,
  fontSize?: number | string,
  max?: number | string,
  lineHeight?: string,
  showOver?: boolean,
  newLine?: boolean,
}

const Props = withDefaults(defineProps<Props>(), {
  text: "",
  color: "#555555",
  fontSize: 16,
  max: 0,
  lineHeight: "1.7em",
  showOver: true,
  newLine: true,
});

let nt = ref("");
onMounted(() => {
  nt.value = Props.text.replace(/\r?\n/g, '<br>');
});

let dText = computed(() => {
  nt.value = Props.text.replace(/\r?\n/g, '<br>');
  let txt = Props.text;
  if (Props.max !== 0) {
    if (Props.text.length > Props.max) {
      txt = Props.text.substring(0, Props.max) + "...";
    }
  }
  return txt;
});

const options = {
  allowedTags: ['r', 'b', 'u', 'br'], // 許可するタグ
  allowedAttributes: {
    // a: ['href', 'rel', 'target']
  }, // 許可する属性
  allowedIframeHostnames: [] // 許可するiframeのホスト名
}
</script>
<template>
  <div v-if="text">
    <div v-if="showOver">
      <template v-if="newLine">
        <div v-for="(line,i) of dText.split(/\r?\n/g)" :key="i">
          <div v-if="line" :style="{'line-height': lineHeight, 'font-size': fontSize + 'px', color: color}">
            {{ line }}
          </div>
          <div v-else style="height: 12px;"/>
        </div>
      </template>
      <div v-else :style="{'line-height': lineHeight, 'font-size': fontSize + 'px', color: color}">{{ dText }}</div>
      <v-tooltip location="bottom" activator="parent" v-if="showOver">
        <span v-sanitize="[options, nt]"/>
      </v-tooltip>
    </div>
    <div v-else>
      <template v-if="newLine">
        <div v-for="(line,i) of dText.split(/\r?\n/g)" :key="i">
          <div v-if="line" :style="{'line-height': lineHeight, 'font-size': fontSize + 'px', color: color}">
            {{ line }}
          </div>
          <div v-else style="height: 12px;"/>
        </div>
      </template>
      <div v-else :style="{'line-height': lineHeight, 'font-size': fontSize + 'px', color: color}">{{ dText }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
