<template>
  <div class="tutella-card">
    <div v-if="profile.isLoggedIn">
      <!-- SIDEBAR USERPIC -->
      <div class="profile-userpic">
        <img src="./../../assets/images/profile_placeholder.png" class="img-responsive center" />
      </div>
      <div class="profile-usertitle">
        <div class="profile-usertitle-name">{{profile.user.firstName}} {{profile.user.lastName}}</div>
        <div class="profile-usertitle-job">@{{profile.user.username}}</div>
      </div>
      <!-- <div class="profile-userbuttons">
        <button type="button" class="btn btn-dark btn-sm">Profile</button>
      </div>-->
      <ul class="list-group">
        <li class="list-group-item">
          <a href="#" @click.prevent @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("GET_PROFILE");
  },
  methods: {
    logout() {
      this.LOGOUT_USER();
    },
    ...mapActions(["LOGOUT_USER"])
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
    ...mapGetters(["profile"])
  }
};
</script>

<style scoped>
.list-group li {
  text-align: center;
  border: none !important;
}
.list-group li a {
  color: #434343;
}
</style>