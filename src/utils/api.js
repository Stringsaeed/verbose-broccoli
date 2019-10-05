import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
export const api = {
  get: url => {
    return axios.get(url);
  },
};
