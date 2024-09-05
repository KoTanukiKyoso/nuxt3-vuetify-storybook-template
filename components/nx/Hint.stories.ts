import type {Meta, StoryObj} from '@storybook/vue3'
import Hint from './Hint.vue';

type Story = StoryObj<typeof Hint>

const meta: Meta<typeof Hint> = {
    title: 'Nexs/Hint',
    component: Hint,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: {type: 'select'}, options: ['mdi-help-circle-outline', 'mdi-alert-circle-outline', "mdi-home", "mdi-account", "mdi-delete"],
        },
    },
    args: {
        // icon: "mdi-help-circle-outline",
        // small: true,
        // title: "ヒントタイトル",
        // hint: "ヒント文章",
        // hover: true,
    },
    // render: args => ({
    //     components: {Hint},
    //     setup() {
    //         return {args}
    //     },
    //     template: '<Hint v-bind="args" />'
    // }),
    // render: null,
} as Meta<typeof Hint>

export default meta

export const Default: Story = {
    args: {},
};
export const NoHover: Story = {
    args: {hover: false},
};
export const Large: Story = {
    args: {small: false},
};
export const ColorChange: Story = {
    args: {color: "red"},
};
export const IconChange: Story = {
    args: {icon: "mdi-alert-circle-outline"},
};

