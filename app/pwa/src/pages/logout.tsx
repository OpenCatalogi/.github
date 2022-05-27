import * as React from "react";
import { navigate } from "gatsby";
import { handleLogout } from "../services/auth";
import APIContext from "../apiService/apiContext";

const Logout: React.FC = () => {
  const API = React.useContext(APIContext);

  React.useEffect(() => {
    handleLogout(API);
    navigate("/");
  });

  return <></>;
};

export default Logout;
