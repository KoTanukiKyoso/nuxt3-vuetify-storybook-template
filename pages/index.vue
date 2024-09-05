<script setup lang="ts">
import {useStore} from "~/composables";

let {test} = useStore();
let btnText: Ref<string> = ref("Vuetify ボタン")
</script>

<template>
  <div class="ma-8">
    <h2>Nuxt3 with Vuetify and Storybook Template</h2>
    <nx-hint title="ヒント" hint="独自コンポーネントもVuetifyのコンポーネントも使用できます" class="mr-4"/>
    <v-btn :text="btnText"/>

    <v-card class="mt-4">
      <v-card-title>Card Title</v-card-title>
      <v-card-subtitle>{{ test }}</v-card-subtitle>
      <v-card-text>
        Bun.jsでテストしていますが、基本的にはnpmで問題ないと思います。<br>
        Storybook は例えば「npm run storybook」で実行
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped lang="scss">

</style>
