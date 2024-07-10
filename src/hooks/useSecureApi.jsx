"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://theme-store-server.vercel.app/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 403) {
          Cookies.remove("AccessToken");
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
