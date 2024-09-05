import type {Meta, StoryObj} from '@storybook/vue3'
import VBtn from './VBtn.vue';
// import {VBtn} from 'vuetify/lib/components/VBtn/VBtn';
// import {VBtn} from 'vuetify/components';
// console.log(VBtn);
// console.log(VBtn.props.block);
// console.log(VBtn.props.block.type());
// console.log(VBtn.props.block.type.name);
// console.log(VBtn.props.icon.type);
// console.log(VBtn.props.icon.type[0].name);

type Story = StoryObj<typeof VBtn>

const meta: Meta<typeof VBtn> = {
    title: 'Vuetify/Button',
    component: VBtn,
    tags: ['autodocs'],
    argTypes: {
        active: {control: {type: "boolean"}},
        activeColor: {control: {type: "text"}},
        appendIcon: {control: {type: "select"}, options: ["mdi-home", "mdi-account", "mdi-delete", undefined]},
        baseColor: {control: {type: "color", presetColors: ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']}},
        block: {control: {type: "boolean"}},
        border: {control: {type: "boolean"}},
        color: {control: {type: "color"}},
        density: {control: {type: "select"}, options: ["default", "comfortable", "compact"]},
        disabled: {control: {type: "boolean"}},
        elevation: {control: {type: "number", min: 1, max: 24},},
        exact: {control: {type: "boolean"}},
        flat: {control: {type: "boolean"}},
        height: {control: {type: "text"}},
        href: {control: {type: "text"}},
        icon: {control: {type: "select"}, options: ["mdi-home", "mdi-account", "mdi-delete", undefined]},
        loading: {control: {type: "boolean"}},
        location: {
            control: {type: "select"},
            options: ['top', 'right', 'bottom', 'left', 'start', 'end', 'center', 'center center', 'top left', 'top right', 'bottom left', 'bottom right', undefined]
        },
        maxHeight: {control: {type: "text"}},
        maxWidth: {control: {type: "text"}},
        position: {control: {type: "select"}, options: ['static', 'relative', 'fixed', 'absolute', 'sticky', undefined]},
        prependIcon: {control: {type: "select"}, options: ["mdi-home", "mdi-account", "mdi-delete", undefined]},
        readonly: {control: {type: "boolean"}},
        replace: {control: {type: "boolean"}},
        ripple: {control: {type: "boolean"}},
        rounded: {control: {type: "select"}, options: [undefined, true, false, "xs", "sm", "lg", "xl", "pill", "circle", "shaped", 0]},
        selectedClass: {control: {type: "text"}},
        size: {control: {type: "select"}, options: ["x-small", "small", "default", "large", "x-large", "10", "30"]},
        slim: {control: {type: "boolean"}},
        stacked: {control: {type: "boolean"}},
        symbol: {control: {type: "text"}},
        tag: {control: {type: "text"}},
        text: {control: {type: "text"}},
        theme: {control: {type: "text"}},
        tile: {control: {type: "boolean"}},
        to: {control: {type: "text"}},
        value: {control: {type: "text"}},
        variant: {control: {type: "select"}, options: ['flat', 'text', 'elevated', 'tonal', 'outlined', 'plain']},
        width: {control: {type: "text"}},
    },
    // args: {
    //     // block: false,
    //     // border: false,
    //     // density: 'default',
    //     // disabled: false,
    //     // exact: false,
    //     // flat: false,
    //     // icon: false,
    //     // loading: false,
    //     // readonly: false,
    //     // replace: false,
    //     // ripple: true,
    //     // size: "default",
    //     // slim: false,
    //     // stacked: false,
    //     // tag: "button",
    //     // text: "Button",
    //     // tile: false,
    //     // variant: "elevated",
    // },
    render: null,
    // render: args => ({
    //     components: {VBtn},
    //     setup() {
    //         return {args}
    //     },
    //     template: '<v-btn v-bind="args" />'
    // }),
} as Meta<typeof VBtn>

export default meta

export const Default: Story = {
    args: {text: "Button"},
};

export const Primary: Story = {
    args: {color: "primary", text: "Button"},
};

export const Secondary: Story = {
    args: {color: 'secondary', text: "Button"},
};

export const Large: Story = {
    args: {size: 'large', text: "Button"},
};

export const Small: Story = {
    args: {size: 'small', text: "Button"},
};
