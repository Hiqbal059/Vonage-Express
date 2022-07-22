import axios from 'axios'

const baseURL = 'Enter base url';
// let headers = {
//   'Content-Type': 'application/json',
//   'accept': 'application/json'
// };


const instance = axios.create({
  baseURL: baseURL,

});

export default instance
