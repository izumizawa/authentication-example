import Axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:8080";

const api: AxiosInstance = Axios.create({
  baseURL: BASE_URL,
});

export default api;
