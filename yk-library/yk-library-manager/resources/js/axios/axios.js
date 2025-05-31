import axios from 'axios';

const api = axios.create({
    baseURL: '',
    timeout: 10000, // 10 seconds
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-access-token-here'
    }
  });

  export default api;
