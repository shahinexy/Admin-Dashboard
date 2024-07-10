"use client";

import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import useAxiosSecure from "../useSecureApi";

const useFetchQuery = (route, params = {}, enable = true) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("user");

  const { data, isSuccess, isLoading, refetch, isError, error } = useQuery({
    // queryKey: ["users", route, ...Object.values(params)],
    enabled: enable,
    queryFn: () =>
      Axios(route, {
        params,
        headers: {
          Authorization: token,
        },
      }),
  });

  return { data: data?.data, isSuccess, isLoading, refetch, isError, error };
};

export default useFetchQuery;
