<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">What's on your mindf?</h5>
        <form>
          <div>
            <input type="text" v-model="title" />
          </div>
          <div>
            <textarea v-model="body">Type content</textarea>
          </div>

          <div>
            <span class="float-right">
              <a href="./posts" class="button primary">Post</a>
              <a href="#" class="card-link">Cancel</a>
            </span>
          </div>
          <div id="preview">{{body}}</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "posts",
  data() {
    return {
      body: "",
      title: ""
    };
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px !important;
  border-radius: 0 !important;
  border: 5px solid #ececec;
  margin: auto 2%;
  width: 96%;
  position: relative;
}
.card textarea {
  width: 98%;
  padding: 1%;
  border: 4px solid #e4e4e4;
}
</style>