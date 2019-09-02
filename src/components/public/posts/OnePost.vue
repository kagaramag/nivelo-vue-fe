<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="`/profile/${post.handle}`">{{ post.name }}</router-link>
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">{{post.handle}}</h6>
        <p class="card-text">{{ post.tweet}}</p>

        <div>
          <span class="float-left">Likes: {{ post.likes }}</span>
          <span class="float-right">
            <a href="#" class="card-link">Edit</a>
            <router-link :to="`./delete/${post.id}`" class="card-link text-danger">Delete</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OnePost",
  data() {
    return {
      post: {
        id: 1,
        name: "James",
        handle: "@jokerjames",
        img: "https://semantic-ui.com/images/avatar2/large/matthew.png",
        tweet: `And there we have it! Hopefully this short article portrayed how useful the v-for directive is as well as provided a little more context to why the key attribute is often used. Let me know if you may have any questions/thoughts whatsoever!
        If you liked my style of writing and are potentially interested in learning how to build real world apps with Vue, you may like the book Fullstack Vue: The Complete Guide to Vue.js that I helped publish! The book covers numerous facets of Vue including routing, simple state management, form handling, Vuex, server persistence, and testing, among other topics. If you’re interested and/or would like to try a sample chapter, you can get more information from our website https://fullstack.io/vue!
        If you have any questions/thoughts/opinions, you’re more than welcome to reach out to me anytime @djirdehh!`,
        likes: 10
      }
    };
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px !important;
  border-radius: 0 !important;
  border: 5px solid #c3c3c3;
  margin: auto 2%;
  width: 96%;
  position: relative;
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