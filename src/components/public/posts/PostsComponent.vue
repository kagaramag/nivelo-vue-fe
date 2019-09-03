<template>
  <div class="row">
    <div class="clear"></div>
    <div class="row" v-if="posts.length > 1">
      <div class="card" v-for="post in posts" :key="post.index">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title">
                <router-link :to="`/${post.title || ''}`">{{ post.title }}</router-link>
              </h5>
              <div>
                <router-link to="/">{{post.author.name}}</router-link>
              </div>
              <div class="card-text">{{ post.description}}</div>
              <div>
                <span class="float-left">
                  Source:
                  <router-link to="/">{{ post.title}}</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="no-content">Loading...</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "posts",
  mounted() {
    this.$store.dispatch("GET_BLOG_POSTS");
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    ...mapGetters(["getPosts"])
  },
  methods: {
    ...mapActions(["changeLikes"])
  }
};
</script>

<style scoped>
.row {
  width: 100%;
  margin: 0;
}
.card {
  margin-bottom: 20px !important;
  border-radius: 0 !important;
  border: 5px solid #c3c3c3;
  margin: auto 2%;
  width: 96% !important;
  position: relative;
}
.card::before {
  position: absolute;
  bottom: -8px;
  height: 4px;
  background: #c7c7c7;
  width: 96%;
  content: "";
  left: 2%;
}
.card::after {
  position: absolute;
  bottom: -12px;
  height: 4px;
  background: #dbdbdb;
  width: 92%;
  content: "";
  left: 3%;
}
.no-content {
  width: 100%;
  text-align: center;
  padding: 3% auto !important;
  border: 3px solid #c3c3c3;
}

.image-post {
  margin: 0;
  padding: 0;
  max-width: 100%;
}

.image-post img {
  margin: 0 auto;
  max-width: 100%;
}
</style>