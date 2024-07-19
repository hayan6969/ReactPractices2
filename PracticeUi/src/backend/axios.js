import axios from "axios";
import useLocalStorage from "@/hooks/useLocalStorage";
import conf from "@/conf/conf";


                                

const key = conf.baseUrl;

export const axiosNormal = axios.create({
    baseURL: key
});
    

export const axiosPrivate = axios.create({

baseURL: key,



});

axiosPrivate.interceptors.request.use(
    config => {
      const token = useLocalStorage('get', 'token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );