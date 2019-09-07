<template>
  <div>
    <component :is="layout">
      <CreatePostComponent></CreatePostComponent>
      <PostsComponent></PostsComponent>
    </component>
  </div>
</template>

<script>
import PostsComponent from "./posts/PostsComponent";
import CreatePostComponent from "./posts/ProfileCreatePost";
import { mapActions, mapGetters } from "vuex";
const default_layout = "default";
export default {
  components: {
    PostsComponent,
    CreatePostComponent
  },
  name: "home",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style scoped>
.post-link {
  margin-bottom: 20px !important;
  border-radius: 0 !important;
  border: 5px solid #bdbdbd;
  margin: 0 auto;
  background: #ffffff;
  padding: 2%;
  width: 96%;
  position: relative;
}
.post-link a {
  display: block;
  text-align: center;
}
</style>