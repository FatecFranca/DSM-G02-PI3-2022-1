import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
    // baseURL: 'https://ergo-frame-api.herokuapp.com/'
})

export default api