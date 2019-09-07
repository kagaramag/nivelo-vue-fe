import AxiosHelper from '@/helpers/AxiosHelper'
/* eslint-disable space-before-function-paren */
export default {
  // initial state
  state: {
    posts: [],
    errors: {}
  },
  // getters
  getters: {
    posts(state) {
      return state.posts
    },
    errors(state) {
      return state.errors
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
      state.posts = ''
      state.posts = [...state.posts, ...payload]
    },
    POST_BLOG_SUCCESS(state, payload) {
      const user = JSON.parse(localStorage.user)
      let post = payload.article
      post = {
        ...post,
        author: {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username
        }
      }
      state.posts = [post, ...state.posts]
    },
    POST_BLOG_FAILURE(state, payload) {
      state.errors = [payload, ...state.errors]
    }
  },

  // actions
  actions: {
    changeLikes: (context, payload) => {
      context.commit('SET_LIKES', payload)
    },
    GET_BLOG_POSTS: context => {
      AxiosHelper.get('/articles?limit=5')
        .then(response => context.commit('GET_BLOGS', response.data.articles))
        .catch(error => console.log(error))
    },
    CREATE_POST: (context, payload) => {
      AxiosHelper.post('/articles', payload)
        .then(response => context.commit('POST_BLOG_SUCCESS', response.data))
        .catch(error =>
          context.commit('POST_BLOG_FAILURE', error.response.data)
        )
    }
  }
}
