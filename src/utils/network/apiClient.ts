import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Evgeny-Mufteev/json-api',
});
