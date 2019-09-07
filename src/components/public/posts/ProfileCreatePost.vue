<template>
  <div>
    <div class="grab-alert">
      <div class="alert alert-danger" v-for="error in errors[0]" :key="error.index">{{error}}</div>
    </div>
    <div class="tutella-card">
      <div class="category">
        <span>Posts</span>
      </div>
      <div class="clear"></div>
      <div class="row" style="margin-top:8px">
        <div class="col-1">
          <div class="image">
            <img src="./../../../assets/images/profile_placeholder.png" alt="Contact Person" />
          </div>
        </div>
        <div class="col-11">
          <form>
            <div>
              <medium-editor
                :text="post.body"
                :options="options"
                custom-tag="div"
                v-on:edit="applyTextEdit"
              />
            </div>
            <div>
              <span class="float-right">
                <button v-on:click.prevent="save" class="btn bg-primary text-light">Share</button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import editor from "vue2-medium-editor";
import "./../../../assets/css/tutella-editor.min.css";
import "./../../../assets/css/flat.min.css";
export default {
  components: {
    "medium-editor": editor
  },
  data() {
    return {
      options: {
        toolbar: {
          allowMultiParagraphSelection: true,
          buttons: ["bold", "italic", "underline", "h2", "h3", "quote"]
        }
      },
      post: {
        body: ""
      }
    };
  },
  name: "ProfileCreatePost",
  computed: {
    errors() {
      return this.$store.getters.errors;
    }
  },
  methods: {
    save() {
      this.CREATE_POST(this.post);
    },
    ...mapActions(["CREATE_POST"]),
    applyOptions(ev) {
      try {
        this.options = JSON.parse(ev.target.value);
        this.optionsValid = true;
      } catch (e) {
        this.optionsValid = false;
      }
    },
    applyTextEdit(ev) {
      if (ev.event.target) {
        this.post.body = ev.event.target.innerHTML;
      }
    }
  }
};
</script>

<style scoped>
.tutella-card .btn {
  margin: 5px;
  padding: 4px 35px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
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

.grab-alert {
  width: 96%;
  margin: 0 2%;
}

.alert {
  width: 100%;
}
.category {
  margin: 0;
  width: 100%;
  display: block;
}
.category span {
  margin: 0;
  float: left;
  padding: 3px 20px;
  background: #e6e6e6;
  border-radius: 15px;
}
</style>