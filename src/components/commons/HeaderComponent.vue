<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-black shadow-4">
      <div class="container">
        <a class="navbar-brand text-light" href="/">
          <b>NIVELO</b>
        </a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template slot="button-content">
                <span class="text-light">@djallas</span>
              </template>
              <router-link class="dropdown-item" to="/profile">Profile</router-link>
            </b-nav-item-dropdown>
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