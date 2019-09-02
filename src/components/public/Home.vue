<template>
  <div class="home">
    <div class="post-link">
      <a href="./profile/#create">What's on your mind?</a>
    </div>
    <PostsComponent></PostsComponent>
  </div>
</template>

<script>
import PostsComponent from "./posts/PostsComponent";
import CreatePostComponent from "./posts/CreatePostComponent";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    PostsComponent,
    CreatePostComponent
  },
  name: "home"
};
</script>

<style scoped>
.post-link {
  margin-bottom: 20px !important;
  border-radius: 0 !important;
  border: 5px solid #ececec;
  margin: auto 0%;
  padding: 2%;
  width: 100%;
  position: relative;
}
.post-link a {
  display: block;
}
</style>