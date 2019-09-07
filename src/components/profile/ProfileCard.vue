<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="image">
            <img src="../../assets/images/profile.png" />
          </div>
        </div>
        <div class="center-align">
          <h3 class="capitalize bold">{{profile.firstName}}, {{profile.lastName}}</h3>
          <h5>{{profile.username?`@${profile.username}`:''}}</h5>
        </div>
        <profile-nav></profile-nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileCard",
  components: {
    ProfileNav: () => import("./ProfileNav")
  },
  props: ["profile"]
};
</script>

<style scoped>
.card .card-body {
  padding-bottom: 4px !important;
}
.card {
  margin-bottom: 20px !important;
  border-radius: 0 !important;
  border: 5px solid #c3c3c3;
  margin: auto 2%;
  width: 100%;
  position: relative;
}
.card .center-align {
  margin: 20px auto;
  text-align: center;
}
.card::before {
  position: absolute;
  bottom: -8px;
  height: 4px;
  background: #dbdbdb;
  width: 96%;
  content: "";
  left: 2%;
}
.card::after {
  position: absolute;
  bottom: -12px;
  height: 4px;
  background: #f0f0f0;
  width: 92%;
  content: "";
  left: 3%;
}
</style>