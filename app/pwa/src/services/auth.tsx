import { navigate } from "gatsby-link";
import APIService from "../apiService/apiService";

export interface IUnvalidatedUser {
  username: string;
  password: string;
}

export const isBrowser = (): boolean => typeof window !== "undefined";

export const handleLogin = async (data: IUnvalidatedUser, API: APIService) => {
  if (!isBrowser()) return;

  return await API.Login.login(data).then((res) => {
    API.setAuthentication(res.data.jwtToken);
    navigate("/");
  });
};

export const isLoggedIn = (): boolean | void => {
  if (!isBrowser()) return;

  return !!window.sessionStorage.getItem("JWT");
};

export const handleLogout = (API: APIService): void => {
  if (!isBrowser()) return;

  API.removeAuthentication();
  navigate("/");
};
