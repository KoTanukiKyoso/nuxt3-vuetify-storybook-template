import {type Preview, setup} from '@storybook/vue3'
import {withVuetifyTheme} from './withVeutifyTheme.decorator';

import vuetify from './utils/vuetify'
import sanitize from './utils/sanitize'
// import vuetify from '~/plugins/vuetify'
// import sanitize from './utils/sanitize'
import '../assets/scss/main.scss'

setup((app) => {
    app.use(vuetify)
    app.use(sanitize)
})

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
} as Preview

export default preview;

export const decorators = [withVuetifyTheme];

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        default: 'lightTheme',
        toolbar: {
            icon: 'power',
            items: [
                {value: 'lightTheme', title: 'Light(default)', right: '🌞'},
                {value: 'darkTheme', title: 'Dark', right: '🌛'},
            ],
            dynamicTitle: true,
        },
    },
};
