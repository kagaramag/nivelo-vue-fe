<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">What's on your mind?</h5>
        <div class="card-text">
          <textarea>type and share</textarea>
        </div>

        <div>
          <span class="float-right">
            <a href="./posts" class="button primary">Post</a>
            <a href="#" class="card-link">Cancel</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "posts",
  data() {
    return {
      posts: [
        {
          id: 1,
          name: "James",
          handle: "@jokerjames",
          img: "https://semantic-ui.com/images/avatar2/large/matthew.png",
          tweet: "If you don't succeed, dust yourself off and try again.",
          likes: 10
        }
      ]
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