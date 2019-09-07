<template>
  <div class="row">
    <div class="row" v-if="posts.length >= 1">
      <div class="tutella-card" v-for="post in posts" :key="post.index">
        <div class="bg-primary">
          <div class="chip chip-md">
            <img src="./../../../assets/images/profile_placeholder.png" alt="Contact Person" />
            {{post.author.firstName}} {{post.author.lastName}}
          </div>
          <span class="float-right timestamp">{{timestamp(post.createdAt)}}</span>
        </div>
        <div class="clear"></div>
        <h5 class="card-title">
          <router-link :to="`/${post.title || ''}`">{{ post.title }}</router-link>
        </h5>
        <div class="card-text" v-if="post.body.length > 340">
          <span v-html="post.body"></span>
        </div>
        <div class="card-text" v-else>
          <span v-html="post.body"></span>
        </div>
        <div></div>
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
    ...mapActions(["changeLikes"]),
    timestamp(time) {
      const months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ];
      const d = (time || "").split("-");
      const created = `${months[d[1] - 1]} ${(d[2] || "").split("T")[0]}`;
      return created;
    }
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
  margin: auto 1%;
  width: 98% !important;
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