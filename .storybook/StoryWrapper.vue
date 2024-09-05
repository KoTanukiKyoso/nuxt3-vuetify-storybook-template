<script>
export default {
  props: {
    themeName: String,
  },
};
</script>

<template>
  <v-app :theme="themeName">
    <v-main>
      <slot name="story"/>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
:deep(.v-application__wrap) {
  min-height: 0;
  padding: 12px;
}
</style>
