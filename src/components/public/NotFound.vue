<template>
  <div class="notfound">
    <div>
      <div>Error 404</div>
      <div>Page Not Found</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notfound"
};
</script>

<style scoped>
.notfound {
  text-align: center;
  font-size: 35px;
  margin-bottom: 75px !important;
  border: 6px solid #cdcdcd;
  padding: 40px 0;
  position: relative;
  height: 220px;
  background: #947474;
  z-index: 5;
  font-weight: bold;
  color: #ffffff;
}
.notfound::before {
  margin-bottom: 35px !important;
  border: 6px solid #5d3434;
  padding: 40px 0;
  transform: rotate(-5deg);
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  min-height: 220px;
  background: #b1a183;
  z-index: -1;
}
.notfound::after {
  margin-bottom: 35px !important;
  border: 6px solid #9b9b9b;
  padding: 40px 0;
  transform: rotate(4deg);
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  min-height: 220px;
  background: #141414;
  z-index: -1;
}
</style>