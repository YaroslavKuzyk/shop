<template lang="pug">
  v-app
    v-main
      MainHeader(v-if="!isAdminPage")
      router-view
      MainFooter(v-if="!isAdminPage")
</template>

<script>

import MainHeader from "@/components/Header";
import MainFooter from "@/components/Footer";
export default {
  name: 'App',
  components: {MainFooter, MainHeader},
  data: () => ({
  }),
  computed: {
    isAdminPage() {
      return this.$route.path.slice(0, 6) === '/admin' ? true : false
    }
  }
};
</script>
<style lang="scss" src="./assets/styles/main.scss"></style>
