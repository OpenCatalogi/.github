import * as React from "react";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useDigiD = () => {
  const API: APIService = React.useContext(APIContext);

  const authenticate = () => {
    const params = new URLSearchParams(location.search);
    const undecodedToken: string | null = params.get("token");

    if (!undecodedToken) return false;

    const JWT: string = window.atob(undecodedToken);

    API.setAuthentication(JWT);
    return true;
  };

  const getRedirectURL = (): string => {
    return `${process.env.GATSBY_BASE_URL}/digid/login?returnUrl=${process.env.GATSBY_FRONTEND_URL}/callbacks/digid`;
  };

  return { authenticate, getRedirectURL };
};
