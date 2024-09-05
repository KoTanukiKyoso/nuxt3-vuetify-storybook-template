import "@mdi/font/css/materialdesignicons.min.css"
import 'vuetify/styles'

import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

export const lightTheme = {
    dark: false,
    colors: {
        primary: "#308040",//colors.indigo.darken3,
        sub: "#405060",
        secondary: "#CD4646",
        accent: "#e91e63",
        error: "#D02020",
        warning: "#ffc107",
        info: "#2196f3",
        success: "#4caf50"
    }
}

export const darkTheme = {
    dark: true,
    colors: {
        background: colors.grey.darken4,
        primary: colors.blue.darken2,
        sub: "#385F73",
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
    }
}

export const defaults = {
    VAppBar: {
        elevation: 0,
    },
    VBtn: {
        color: 'primary',
    },
    VTextField: {
        color: 'primary',
        variant: 'outlined',
        density: 'comfortable',
        hideDetails: true,
    },
    VSelect: {
        color: 'primary',
        variant: 'outlined',
        density: 'comfortable',
        hideDetails: true,
    },
    VCheckbox: {
        color: 'primary',
        variant: 'outlined',
        density: 'comfortable',
        hideDetails: true,
    },
    VTextarea: {
        color: 'primary',
        variant: 'outlined',
        autoGrow: true,
        hideDetails: true,
    },
    VDialog: {
        maxWidth: 600,
    },
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        defaults,
        // ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: 'lightTheme',
            themes: {
                lightTheme,
                darkTheme
            }
        },
    });
    nuxtApp.vueApp.use(vuetify);
});
