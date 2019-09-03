import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


import posts from './modules/posts'
import users from './modules/users'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    posts,
    users
  }
})
