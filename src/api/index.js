import axios from "axios";
const axiosAPI = axios.create({
  baseURL: "http://localhost:3001/api",
});
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
export default axiosAPI