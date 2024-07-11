import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import useAxiosSecure from "../useSecureApi";

const useUpdateMutateWithID = (
  route,
  onSuccess = () => {},
  onError = () => {}
) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("AccessToken");
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (obj) =>
      Axios.patch(route, obj, {
        headers: {
          Authorization: token,
        },
      }),
    onSuccess: (mutatedData) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      console.log(mutatedData);
      onSuccess(mutatedData);
    },
    onError: (err) => {
      console.log(err);
      onError(err);
    },
  });

  return { mutate, isPending };
};

export default useUpdateMutateWithID;
