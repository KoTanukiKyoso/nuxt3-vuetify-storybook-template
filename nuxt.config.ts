import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify';

let title: string = "Nuxt3-Vuetify-storybook";
let description: string = "template";
let path: string = "";
let domain: string = "n-dev.nexsjp.com";

export default defineNuxtConfig({
    ssr: false,
    // ssr: true,
    // devtools: {enabled: false},
    app: {
        head: {
            titleTemplate: title,//%s -
            title: title,
            htmlAttrs: {
                lang: 'ja',
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: description},
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'content-language', content: 'ja'},

                {name: 'og:site_name', property: 'og:site_name', content: title},
                {name: 'og:type', property: 'og:type', content: 'website'},
                {name: 'og:url', property: 'og:url', content: `${path}`},
                {name: 'og:title', property: 'og:title', content: title},
                {name: 'og:description', property: 'og:description', content: description},
                {name: 'og:image', property: 'og:image', content: `${path}icon.png`},
                {name: 'twitter:card', content: 'summary'},

                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'mobile-web-app-capable', content: 'yes'},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: `/favicon.ico`},
                // {rel: 'manifest', href: `manifest.json`},
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400&family=Oswald:wght@700&display=swap",
                    crossorigin: "",
                },
            ]
        },
    },

    build: {
        transpile: ['vuetify', '@vuepic/vue-datepicker'],//, 'v-sanitize/nuxt'
    },

    modules: [
        '@vueuse/nuxt',
        'nuxt-lodash',
        '@nuxt/image',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        }
    ],

    css: ['@/assets/scss/main.scss'],

    lodash: {
        prefix: '_',
        upperAfterPrefix: false,
    },

    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },

    compatibilityDate: '2024-08-29',
})
