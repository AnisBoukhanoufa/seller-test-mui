import axios from "axios";
export const apiBaseUrl = import.meta.env.VITE_BASE_URL;

export const baseRequest = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// Store controllers for each request to track ongoing requests
const controllers = new Map();

baseRequest.interceptors.request.use((config) => {
  // Generate unique request key based on method & URL
  const requestKey = `${config.method.toUpperCase()} ${
    config.url?.split("?")[0]
  }`;
  // Abort the previous request if it exists
  if (controllers.has(requestKey)) {
    controllers.get(requestKey).abort();
  }

  // Create a new AbortController for request that dont have signal
  if (!config.signal) {
    const abortController = new AbortController();
    config.signal = abortController.signal;
    controllers.set(requestKey, abortController);
  }
  return config;
});

baseRequest.interceptors.response.use(
  (response) => {
    // Remove completed request from the map
    const requestKey = `${response.config.method.toUpperCase()} ${
      response.config.url?.split("?")[0]
    }`;
    controllers.delete(requestKey);

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);