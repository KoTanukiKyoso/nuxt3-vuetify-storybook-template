import {fn} from '@storybook/test';
import {VCard} from 'vuetify/lib/components/VCard/VCard';

export default {
    title: 'Vuetify/Card',
    component: VCard,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export const Default = {
    args: {title: "Title", subtitle: "subtitle", text: "text"},
};

export const Primary = {
    args: {color: "primary", title: "Title", subtitle: "subtitle", text: "text"},
};

