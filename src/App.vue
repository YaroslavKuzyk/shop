<template lang="pug">
  v-app
    v-main
      v-container
        MainHeader
        router-view
</template>

<script>

import MainHeader from "@/components/Header";
export default {
  name: 'App',
  components: {MainHeader},
  data: () => ({
  }),
};
</script>
<style lang="scss" src="./assets/styles/main.scss"></style>
