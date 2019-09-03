<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <form>
          <div>
            <input
              type="text"
              v-model.lazy="post.title"
              value="Galaxy of John Doe"
              placeholder="Title"
            />
          </div>
          <div>
            <textarea
              v-model.lazy="post.body"
              placeholder="Write your post..."
              value="Galaxy of John Doe"
            >Type content</textarea>
          </div>
          <div>
            <span class="float-right">
              <button v-on:click.prevent="save" class="btn bg-primary text-light">Post</button>
            </span>
          </div>
          <div id="preview">
            <b>{{post.title}}</b>
            <br />
            {{post.body}}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
        description: "Just lorem ipsum"
      }
    };
  },
  name: "ProfileCreatePost",
  methods: {
    save() {
      this.CREATE_POST(this.post);
    },
    ...mapActions(["CREATE_POST"])
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
form {
  width: 100%;
}
form input[type="text"],
form textarea {
  width: 100%;
  margin: 0 0 10px 0;
  border: none;
  border-bottom: 1px solid #cdcdcd !important;
  padding: 15px auto;
}
</style>