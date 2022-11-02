<template lang="pug">
  v-app
    v-main
      v-container(fluid).px-0.py-0
        router-view
</template>

<script>

export default {
  name: 'App',
  data: () => ({
  }),
};
</script>
<style lang="scss" src="./assets/styles/main.scss"></style>
