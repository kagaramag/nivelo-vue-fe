<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style scoped>
.container {
  margin-top: 75px;
}
.content-wrapper {
  margin: 0px auto;
  display: block;
  max-width: 1100px;
}
</style>
