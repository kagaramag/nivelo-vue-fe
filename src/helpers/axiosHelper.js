import axios from 'axios'

const baseUrl = 'https://newsapi.org/v2/'
const apiKey = 'apiKey=f73ab402dd914bb8bfc74c513c08dc6e'

class AxiosHelper {
  static get = (path, config = {}) => {
    return new Promise((resolve, reject) => {
      return axios
        .get(`${baseUrl}/${path}`)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default AxiosHelper
