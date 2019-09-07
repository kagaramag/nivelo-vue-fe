<template>
  <div>
    <nav class="navbar fixed-top navbar-light bg-tutella">
      <div class="container" style="padding:0 auto">
        <a class="navbar-brand" href="/">
          <img src="./../../assets/images/logo_nivelo_xs.svg" />
        </a>
        <nav class="main-nav left">
          <ul>
            <!-- <li>
              <router-link :to="'./profile'">Profile</router-link>
            </li>-->
          </ul>
        </nav>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["profile"]
};
</script>
<style scoped>
.navbar-items {
  margin: 0;
  padding: 0px;
  display: inline;
}
.navbar-items li {
  list-style-type: none;
  float: left;
}
.navbar-items li a {
  padding: 5px 15px;
  color: #fefefe;
  font-weight: bold;
}
</style>