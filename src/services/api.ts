import axios from 'axios';
import {API_HOST} from '@env';

const api = axios.create({
  baseURL: API_HOST.replace("'", ''),
});

api.interceptors.request.use((config) => {
  const newConfig = config;

  newConfig.headers.accepts = 'application/json; charset=utf-8';

  return newConfig;
});

export default api;
