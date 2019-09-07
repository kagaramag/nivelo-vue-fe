import axios from 'axios'

const { URL_BACKEND } = process.env
const token = localStorage.getItem('token')

class AxiosHelper {
  static get = path => {
    return new Promise((resolve, reject) => {
      return axios
        .get(`${URL_BACKEND}${path}`, {
          headers: {
            'access-token': token || ''
          }
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  };

  static post = (path, data) => {
    return new Promise((resolve, reject) => {
      return axios
        .post(`${URL_BACKEND}${path}`, data, {
          headers: {
            'access-token': token
          }
        })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  };
}

export default AxiosHelper
