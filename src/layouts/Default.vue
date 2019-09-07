<script>
import HeaderComponent from "./../components/commons/HeaderComponent";
import SidebarComponent from "./../components/commons/SidebarComponent";
export default {
  components: {
    HeaderComponent,
    SidebarComponent
  }
};
</script>

<template>
  <div>
    <HeaderComponent />
    <div class="row">
      <div class="col-3">
        <SidebarComponent />
      </div>
      <div class="col-9">
        <slot />
      </div>
    </div>
  </div>
</template>