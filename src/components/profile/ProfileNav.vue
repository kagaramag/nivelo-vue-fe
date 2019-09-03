<template>
  <div class="row">
    <ul class="profile-nav">
      <li>
        <router-link to="/">Profile</router-link>
        <router-link to="/">Settings</router-link>
        <router-link to="/">Logout</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ProfileNav"
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