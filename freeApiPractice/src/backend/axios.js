import axios from "axios";
import { useSelector } from "react-redux";


export default axios.create({ 
    baseURL: "http://localhost:8080/api/v1/",
  });

  export const tokenAxios=()=>{
    const authaxios = axios.create({
      baseURL: "http://localhost:8080/api/v1/",
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
  return authaxios
  }