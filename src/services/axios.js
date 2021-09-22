import axios from "axios";
import apod from "./apod";

const DEFAULT_PARAMS = {
  api_key: "tYseOy1RGG0JC2gxy7YqikWZESI06bnvh8E2LZZ7",
};

axios.defaults.baseURL = `https://api.nasa.gov/planetary`;

axios.interceptors.request.use(
  function (config) {
    config.params = {
      ...DEFAULT_PARAMS,
      ...config.params,
    };
    //   headers if any
    const headers = {};
    return { ...config, headers };
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const Routes = {
  apod,
};

export default axios;
