<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <textarea>Type and share</textarea>
      </div>
      <div>
        <button :click="savePost" class="btn bg-primary text-light">Save</button>
        <!-- <button class="btn bg-light text-dark">Attach</button>
        <button class="btn bg-light text-dark">Cancel</button>-->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ProfileCreatePost",

  methods: {
    ...mapActions(["savePost"])
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px !important;
  border-radius: 0 !important;
  border: 5px solid #c3c3c3;
  margin: auto 2%;
  width: 100%;
  position: relative;
}
.card .btn {
  margin: 5px;
}
.card textarea {
  width: 100%;
  padding: 0%;
  border: none;
}
</style>