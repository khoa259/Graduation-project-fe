import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { baseURL, localStorageConstants, urlRouter } from "../utils/constants";

const axiosClient = axios.create({
  baseURL: `${baseURL}/api`,
  headers: {
    Accept: 'application/json', 'Content-Type': 'application/json',
  }
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    if (!config?.headers) {
      throw new Error(`Expected 'config' and 'config.headers' not to be undefined`)
    }

    const token = localStorage.getItem(localStorageConstants.ACCESS_TOKEN);

    config.headers.Authorization = token ? `Bearer ${token}` : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiZHVuZ25jMDQwMkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2ODg3ODk4NzIsImV4cCI6MTY4ODg3NjI3Mn0.x1-MURH_sITb7k-HuqR6-lzmdVC2x9jfLN0hpeyNI2o'
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (
      (error.response.status === 401 && error.response.data.message === 'Unauthorized') ||
      (error.response.status === 500 && error.response.data.message === 'Error: invalid signature') ||
      (error.response.status === 500 && error.response.data.message === 'Error: Permission denied')
    ) {
      window.location.href = urlRouter.AUTH;
      window.localStorage.clear();
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
