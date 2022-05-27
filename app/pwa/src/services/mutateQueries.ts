import { QueryClient } from "react-query";

const addItem = async (queryClient: QueryClient, queryKey: string, item: any) => {
  await queryClient.cancelQueries(queryKey);

  const previousQueryData = queryClient.getQueryData<any[]>(queryKey);

  if (previousQueryData) {
    queryClient.setQueryData(queryKey, [item, ...previousQueryData]);
  }

  queryClient.invalidateQueries(queryKey);
};

export { addItem };
