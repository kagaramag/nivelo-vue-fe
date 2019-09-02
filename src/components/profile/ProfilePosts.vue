<template>
  <div class="row">
    <posts-component></posts-component>
  </div>
</template>

<script>
export default {
  name: "ProfilePosts",
  components: {
    PostsComponent: () => import("./../public/posts/PostsComponent")
  }
};
</script>