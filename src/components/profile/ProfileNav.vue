<template>
  <div class="row">
    <ul class="profile-nav">
      <li>
        <router-link class="btn" to="/">Profile</router-link>
        <button class="btn" @click.prevent @click="logout">Logout</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProfileNav",
  methods: {
    logout() {
      this.LOGOUT_USER();
    },
    ...mapActions(["LOGOUT_USER"])
  }
};
</script>

<style scoped>
.profile-nav {
  border-top: #ebebeb 2px solid;
  width: 100%;
  display: inline-block;
  margin: 0;
  padding: 10px 0;
  text-align: center;
}
.profile-nav li {
  list-style-type: none;
}
.profile-nav li a {
  margin: 5px 10px !important;
  color: #343434;
}
</style>