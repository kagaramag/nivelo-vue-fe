<template>
  <component :is="layout">
    <div class="profile">
      <profile-card :profile="profile"></profile-card>
      <profile-create-post></profile-create-post>
      <profile-posts></profile-posts>
    </div>
  </component>
</template>

<script>
import { mapGetters } from "vuex";
const default_layout = "default";
export default {
  components: {
    ProfileCard: () => import("./ProfileCard"),
    ProfilePosts: () => import("./ProfilePosts")
  },
  name: "profile",
  mounted() {
    this.$store.dispatch("GET_PROFILE");
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
    profile() {
      return this.$store.getters.profile.user;
    },
    ...mapGetters(["profile"])
  }
};
</script>

<style scoped>
.profile {
  width: 100%;
}
.post-link {
  /* margin-bottom: 20px !important; */
  border-radius: 0 !important;
  border: 5px solid #ececec;
  margin: auto 0%;
  padding: 0%;
  width: 100%;
  position: relative;
}
.post-link a {
  display: block;
}
</style>