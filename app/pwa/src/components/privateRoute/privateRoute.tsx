import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../../services/auth";

export const PrivateRoute: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!isLoggedIn() && window.location.pathname !== "/login") {
      navigate("/login");
    }

    isLoggedIn() && setAuthenticated(true);
  }, [isLoggedIn()]);

  if (!authenticated) return <></>;

  return <>{children}</>;
};
