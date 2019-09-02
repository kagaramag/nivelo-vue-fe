import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    posts: [
      {
        id: 1,
        title: 'Hello John Doe',
        handle: '@johndoe',
        name: 'John Doe',
        body: 'Hello, John Doe',
        likes: 6
      },
      {
        id: 2,
        title: 'Hello Jane Doe',
        handle: '@janedoe',
        name: 'Jane Doe',
        body: 'Hello, Jane Doe',
        likes: 13
      },
      {
        id: 3,
        title: 'Hello John Smith',
        handle: '@johnsmith',
        name: 'John Smith',
        body: 'Hello, John Smith',
        likes: 13
      }
    ]
  },
  getters: {
    customizedPosts: state => {
      const customizedPosts = state.posts.map(post => {
        return {
          id: post.id,
          title: '**' + post.title + '**=>',
          likes: post.likes,
          handle: post.handle,
          name: post.name,
          body: post.body
        }
      })
      return customizedPosts
    }
  },
  mutations: {
    changeLikes: (state, payload) => {
      state.posts.forEach(post => {
        if (post.id === payload) {
          post.likes += 1
        }
      })
    }
  },
  actions: {
    changeLikes: (context, payload) => {
      context.commit('changeLikes', payload)
    },
  }
})
