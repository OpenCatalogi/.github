import * as React from "react";
import { QueryClient, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useCase = (queryClient: QueryClient) => {
  const API: APIService = React.useContext(APIContext);

  const getOne = (caseId: string) =>
    useQuery<any, Error>(["cases", caseId], () => API.Case.getOne(caseId), {
      initialData: () => queryClient.getQueryData<any[]>("cases")?.find((_case) => _case.uuid === caseId),
      onError: (error) => {
        throw new Error(error.message);
      },
      enabled: !!caseId,
    });

  const getAll = () =>
    useQuery<any[], Error>("cases", API.Case.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      },
    });

  return { getAll, getOne };
};
