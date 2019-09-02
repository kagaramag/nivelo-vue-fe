<template>
  <div class="profile">
    <profile-card></profile-card>
    <profile-create-post></profile-create-post>
    <profile-posts></profile-posts>
  </div>
</template>

<script>
export default {
  components: {
    ProfileCard: () => import("./ProfileCard"),
    ProfileCreatePost: () => import("./ProfileCreatePost"),
    ProfilePosts: () => import("./ProfilePosts")
  },
  name: "profile"
};
</script>

<style scoped>
.profile {
  width: 100%;
}
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