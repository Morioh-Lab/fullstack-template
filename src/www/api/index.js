import axios from "axios";
// import Vue from "vue";
import config from '../config';

const API = axios.create({
  baseURL: config.BASE_API_URL,
  headers: {
    'X-CSRF-Token': window.__csrf, //document.querySelector('meta[name="__csrf"]').getAttribute('content'),
    'Access-Control-Allow-Origin':'*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

// Vue.axios = API;


export default {
  put(url, data) {
    return API.put(url, data);
  },
  get(url, data) {
    return API.get(url, data);
  },
  post(url, data) {
    return API.post(url, data);
  },
  delete(url, data) {
    return API.delete(url, data);
  }
};