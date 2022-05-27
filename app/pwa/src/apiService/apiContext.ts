import * as React from "react";
import APIService from "./apiService";

const APIContext = React.createContext<APIService>(new APIService());

export const APIProvider = APIContext.Provider;

export default APIContext;
