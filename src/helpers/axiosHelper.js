import axios from 'axios'

const { URL_BACKEND } = process.env;


class AxiosHelper {
  static get = (path) => {
    return new Promise((resolve, reject) => {
      return axios
        .get(`${URL_BACKEND}/${path}`)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  static post = (path, data) => {
    return new Promise((resolve, reject) => {
      return axios
        .post(`${URL_BACKEND}/${path}`, data)
        .then(response => {
          console.log('res', response);
          resolve(response)
        })
        .catch(error => {
          console.log('error', error);
          reject(error.response.data.errors)
        })
    })
  }
}

export default AxiosHelper
