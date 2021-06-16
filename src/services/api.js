import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://aerospaceparts.tk:443`,
    timeout: 100000
  })
  
}