import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestHeaders,
} from "axios";

// Create an instance of Axios
const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY, // Replace with your API base URL
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Add your custom headers here
    config.headers = {
      ...config.headers,
      "x-msw-intention": "1",
    } as unknown as AxiosRequestHeaders;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle the response data here
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
