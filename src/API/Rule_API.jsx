import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;

/* API.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403) {
      return Promise.reject(
        "No tiene el permiso necesario para realizar esta operación"
      );
    }
    if (error.response.status === 400 && !originalRequest._retry) {
      return Promise.reject(
        "Ha ocurrido un error. Espere unos minutos e intente de nuevo."
      );
    }
  }
); */
