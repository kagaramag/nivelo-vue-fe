
import AxiosHelper from './../../helpers/AxiosHelper'
import router from '../../router';
/* eslint-disable space-before-function-paren */
export default {
  // initial state
  state: {
    profile: {
      user: {},
      errors: {},
      loading: false,
      message: '',
      isLoggedIn: false
    },
  },
  // getters
  getters: {
    profile(state) {
      return state.profile
    }
  },

  // mutations
  mutations: {
    GET_PROFILE(state) {
      state.profile = { ...state.profile.user, ...JSON.parse(localStorage.user) }
    },
    REGISTER_USER_SUCCESS(state, payload) {
      state.profile = { ...state.profile, ...payload }
    },
    REGISTER_USER_FAILURE(state, payload) {
      state.profile.errors = [payload, ...state.profile.errors]
    },
    LOGIN_USER_SUCCESS(state, payload) {
      state.profile = { ...state.profile, ...payload };
      localStorage.user = JSON.stringify(payload.user);
      localStorage.isAuth = true;
      localStorage.token = payload.token;
      router.push('profile');
    },
    LOGIN_USER_FAILURE(state, payload) {
      state.profile.errors = [payload, ...state.profile.errors]
    },
  },

  // actions
  actions: {
    GET_PROFILE: (context) => {
      context.commit('GET_PROFILE')
    },
    REGISTER_USER: (context, payload) => {
      AxiosHelper
        .post('/auth/signup', payload)
        .then(response =>
          context.commit('REGISTER_USER_SUCCESS', response.data)
        )
        .catch(error =>
          context.commit('REGISTER_USER_FAILURE', error)
        )
    },
    LOGIN_USER: (context, payload) => {
      AxiosHelper
        .post('/auth/login', payload)
        .then(response =>
          context.commit('LOGIN_USER_SUCCESS', response.data)
        )
        .catch(error =>
          context.commit('LOGIN_USER_FAILURE', error)
        )
    }
  }
}
