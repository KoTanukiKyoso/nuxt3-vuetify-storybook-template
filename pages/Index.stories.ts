import type {Meta, StoryObj} from '@storybook/vue3'
import Index from './index.vue';

type Story = StoryObj<typeof Index>

const meta: Meta<typeof Index> = {
    title: 'Page/Index',
    component: Index,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    // render: args => ({
    //     components: {Index},
    //     setup() {
    //         return {args}
    //     },
    //     template: '<Index v-bind="args" />'
    // }),
    // render: null,
} as Meta<typeof Index>

export default meta

export const Default: Story = {
    args: {},
};

