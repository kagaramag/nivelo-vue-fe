
import AxiosHelper from './../../helpers/AxiosHelper'
/* eslint-disable space-before-function-paren */
export default {
  // initial state
  state: {
    posts: []
  },
  // getters
  getters: {
    posts(state) {
      return state.posts
    }
  },

  // mutations
  mutations: {
    SET_LIKES(state, payload) {
      state.posts.forEach(post => {
        if (post.id === payload) {
          post.likes += 1
        }
      })
    },
    GET_BLOGS(state, payload) {
      state.posts = [...state.posts, ...payload]
    },
    POST_BLOG(state, payload) {
      state.posts = [payload, ...state.posts]
    }
  },

  // actions
  actions: {
    changeLikes: (context, payload) => {
      context.commit('SET_LIKES', payload)
    },
    GET_BLOG_POSTS: (context) => {
      AxiosHelper
        .get('/articles?limit=3')
        .then(response =>
          context.commit('GET_BLOGS', response.data.articles)
        )
        .catch(error => console.log(error))
    },
    CREATE_POST: (context, payload) => {
      AxiosHelper
        .post('/articles')
        .then(response =>
          context.commit('POST_BLOG', response.data.articles)
        )
        .catch(error => console.log(error))
    }
  }
}
