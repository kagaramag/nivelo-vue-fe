import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v1'

class AxiosHelper {
  static get = (path) => {
    return new Promise((resolve, reject) => {
      return axios
        .get(`${baseUrl}${path}`)
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
        .post(`${baseUrl}${path}`, data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error.response.data.errors)
        })
    })
  }
}

export default AxiosHelper
