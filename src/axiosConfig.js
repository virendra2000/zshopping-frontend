import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BACKEND_URL

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'jwtoken': document.cookie.replace(/(?:(?:^|.*;\s*)jwtoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
  },
  withCredentials: true,
});

export default http;