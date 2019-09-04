<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-black shadow-4">
      <div class="container">
        <a class="navbar-brand text-light" href="/">
          <b>TUTELLA</b>
        </a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <router-link class="text-light" :to="'/profile'">Profile</router-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </nav>
  </div>
</template>

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