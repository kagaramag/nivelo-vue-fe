/* eslint-disable space-before-function-paren */
import axios from 'axios'
import store from '@/store'
import { openModal } from '@/utils/helperFunctions'

export const baseUrl = 'https://beta.cowsoko.com'
const baseURL = 'https://beta.cowsoko.com/api/v1/'
const ecommerceBackendURL = 'https://dairynomics.herokuapp.com/api'

export const interceptor = axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    config.headers.Accept = `application/json`
    return config
  },
  () => { }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      store.commit('setAuthError', 'Please Log in to continue!')
      openModal('login')
    }
    return Promise.reject(error)
  }
)
class AxiosCalls {
  static getHeaders = config => {
    return {
      headers: {
        Accept: 'application/json'
      },
      ...config
    }
  };
  static get(path, config = {}) {
    return new Promise((resolve, reject) => {
      return axios
        .get(`${baseUrl}/${path}`, this.getHeaders(config))
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default AxiosCalls
