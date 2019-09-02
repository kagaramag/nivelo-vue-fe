import axios from "axios";
/* eslint-disable space-before-function-paren */
export default {
  // initial state
  state: {
    posts: []
  },
  // getters
  getters: {
    getPosts(state) {
      return { ...state }
    }
  },

  // mutations
  mutations: {
    changeLikes: (state, payload) => {
      state.posts.forEach(post => {
        if (post.id === payload) {
          post.likes += 1
        }
      })
    },
    GET_BLOGS(state, payload) {
      state.posts.push({ payload })
    }
  },

  // actions
  actions: {
    changeLikes: (context, payload) => {
      context.commit('changeLikes', payload)
    },
    getBlogPosts: (context) => {
      axios
        .get("https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=f73ab402dd914bb8bfc74c513c08dc6e")
        .then(function (response) {
          context.commit('GET_BLOGS', response.data.articles)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
