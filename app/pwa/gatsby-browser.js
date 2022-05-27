import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const wrapRootElement = ({ element }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {element}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
