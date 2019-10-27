import axios from 'axios';

const api = axios.create({
  baseURL: 'https://acolher.herokuapp.com/api/'
});

export default api;
