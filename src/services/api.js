import axios from 'axios';

const apiGH = axios.create({
  baseURL: 'https://api.github.com',
});

const apiTC = axios.create({
  baseURL: 'https://api.github.com',
});

export { apiGH, apiTC };
