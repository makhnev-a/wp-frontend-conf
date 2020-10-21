import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://lumen-api:8103/api'
});
