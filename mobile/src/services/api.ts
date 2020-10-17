import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.31.53.83:3333'
})