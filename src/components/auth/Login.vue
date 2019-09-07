<template>
  <div class="login">
    <div class="box shadow-4 radius-3">
      <h1 class="bg-primary text-light">Login</h1>
      <form class="p-4">
        <div class="row" v-if="profile && profile.errors">
          <div
            class="alert alert-danger"
            v-for="error in profile.errors"
            :key="error.index"
          >{{error}}</div>
        </div>
        <div class="form-group">
          <label for="email">Your email</label>
          <input
            type="email"
            class="form-control"
            v-model="user.email"
            id="email"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="user.password" id="password" />
        </div>
        <button type="submit" @click.prevent @click="login" class="btn btn-primary">Login</button>
        Haven't account yet?
        <router-link :to="'/register'">Register</router-link>
      </form>
    </div>
    <br />
    <div class="text-center">
      Go back
      <router-link :to="'/'" class="bold p-1">Home</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    }
  },
  methods: {
    login() {
      this.LOGIN_USER(this.user);
    },
    ...mapActions(["LOGIN_USER"])
  }
};
</script>

<style scoped>
.login h1 {
  text-align: center;
  font-size: 22px;
  padding: 20px 0;
}
.login .box {
  background: #ffffff;
}
.alert {
  width: 100%;
}
</style>