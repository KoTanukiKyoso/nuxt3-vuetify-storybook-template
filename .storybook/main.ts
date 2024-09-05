import type {StorybookConfig} from '@storybook/vue3-vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// import {resolve} from 'path'
import {mergeConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import vue from '@vitejs/plugin-vue'

const dirname: string = __dirname.replace(/\\/g, '/')
// console.log("dirname", dirname)
//
// const toAbsPath = (path: string): string => {
//     return resolve(path).replace(/\\/g, '/')
// }
// const absPath: string = toAbsPath("");
// console.log("absPath", absPath)

const config: StorybookConfig = {
    stories: [
        '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../pages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {
            docgen: 'vue-component-meta',
        },
    },
    viteFinal: async (config) => {
        // config.resolve.alias["#app"] = absPath + "/node_modules/nuxt/dist/app";
        // config.resolve.alias["#app/*"] = absPath + "/node_modules/nuxt/dist/app/*";
        // config.resolve.alias["#vue-router"] = absPath + "/node_modules/vue-router";
        // config.resolve.alias["#imports"] = absPath + "/.nuxt/imports";
        // config.resolve.alias["#build"] = absPath + "";
        // config.resolve.alias["#build/*"] = absPath + "/*";
        // config.resolve.alias["#components"] = absPath + "/.nuxt/components";
        // config.resolve.alias[""] = "";
        return mergeConfig(config, {
            optimizeDeps: {exclude: ['fsevents']},
            resolve: {
                dedupe: ['@storybook/client-api'],
                alias: {
                    '~': dirname + '/../',
                },
            },
            plugins: [
                vue(),
                AutoImportComponents({
                    dirs: ["components"],
                    deep: true,
                    directoryAsNamespace: true,
                    resolvers: [
                        // @ts-ignore
                        (componentName: string) => {
                            if (componentName === 'NuxtLink') {
                                return {
                                    name: componentName,
                                    path: dirname + '/mocks/NuxtLink',
                                }
                            }
                        },
                        // @ts-ignore
                        (componentName: string) => {
                            if (componentName === 'NuxtImg' || componentName === 'NuxtPicture') {
                                return {
                                    name: componentName,
                                    path: dirname + '/mocks/NuxtImage',
                                }
                            }
                        },
                    ],
                    dts: ".storybook/components.d.ts",
                }),
                AutoImport({
                    dirs: [dirname + '/../composables', dirname + '/mocks'],
                    imports: ['vue', '@vueuse/core'],
                    dts: ".storybook/auto-imports.d.ts",
                }),
                tsconfigPaths(),
            ],

        } satisfies typeof config)
    },
    staticDirs: [
        {
            from: dirname + '/../public',
            to: '/',
        },
    ],
}
export default config
