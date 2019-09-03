<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="app">
    <div v-if="$route.path !== '/register' && $route.path !== '/login'">
      <HeaderComponent></HeaderComponent>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="content-wrapper">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/commons/HeaderComponent";
import SidebarComponent from "./components/commons/SidebarComponent";
export default {
  name: "App",
  components: { HeaderComponent, SidebarComponent }
};
</script>
<style scoped>
.container {
  margin-top: 50px;
}
.content-wrapper {
  margin: 30px auto;
  display: block;
  max-width: 760px;
}
</style>
