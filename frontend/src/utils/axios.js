import axios from "axios";
import authStore from "../store/auth";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = authStore.getState().token;

    if (config.headers) {
      config.headers.Authorization = token ? `Bearer ${token}` : "";
    }

    return config;
  },
  (err) => Promise.reject(err),
);

export default instance;
