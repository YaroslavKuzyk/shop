<template lang="pug">
  v-app
    v-main
      MainHeader
      router-view
      MainFooter
</template>

<script>

import MainHeader from "@/components/Header";
import MainFooter from "@/components/Footer";
export default {
  name: 'App',
  components: {MainFooter, MainHeader},
  data: () => ({
  }),
};
</script>
<style lang="scss" src="./assets/styles/main.scss"></style>
