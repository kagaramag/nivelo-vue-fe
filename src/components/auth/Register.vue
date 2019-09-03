<template>
  <div class="register">
    <div class="box shadow-4 radius-3">
      <h1 class="bg-primary text-light">Register</h1>
      <form class="p-4">
        <div class="row" v-if="profile && profile.errors">
          <div
            class="alert alert-danger"
            v-for="error of profile.errors[0]"
            :key="error.index"
          >{{error}}</div>
        </div>
        <div class="row" v-if="profile && profile.message">
          <div class="alert alert-success">
            {{profile.message}}.
            <br />
            <router-link :to="'/login'">Click here</router-link>
            {{' '}} to login
          </div>
        </div>
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input
            type="text"
            class="form-control"
            v-model="user.firstName"
            id="firstname"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input
            type="text"
            class="form-control"
            v-model="user.lastName"
            id="lastname"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            v-model="user.username"
            id="username"
            autocomplete="off"
          />
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
        <button type="submit" @click.prevent @click="register" class="btn btn-primary">Register</button>
        Already have account?
        <router-link :to="'/login'">Login</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "register",
  data() {
    return {
      user: {
        lastName: "",
        firstName: "",
        username: "",
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
    register() {
      this.REGISTER_USER(this.user);
    },
    ...mapActions(["REGISTER_USER"])
  }
};
</script>

<style scoped>
.register h1 {
  text-align: center;
  font-size: 22px;
  padding: 20px 0;
}
.register .box {
  background: #ffffff;
}
.alert {
  width: 100%;
}
</style>