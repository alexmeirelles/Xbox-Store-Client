import axios from "axios";

const api = axios.create({
  baseURL: "https://xbox-live-server-blue.onrender.com/",
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("jwtLocalStorage");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
    console.log(error);
  }
});

export default api;