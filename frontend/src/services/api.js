import axios from "axios";

const api = axios.create({
  baseURL:
    "https://healthcare-intelligence-platform.onrender.com",
});

export default api;