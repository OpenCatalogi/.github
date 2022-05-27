import * as React from "react";
import { useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useMessage = () => {
  const API: APIService = React.useContext(APIContext);

  const getAll = () =>
    useQuery<any[], Error>("messages", API.Message.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  return { getAll };
};
