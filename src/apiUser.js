// apiUser.js
import axios from 'axios';

const apiUser = axios.create({
  baseURL: "http://localhost:3030/filmrausch",
});

export default apiUser;
