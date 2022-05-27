import * as React from "react";
import { navigate } from "gatsby";
import { useDigiD } from "../../hooks/useDigiD";

const digid: React.FC = () => {
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);
  const { authenticate } = useDigiD();

  React.useEffect(() => {
    setAuthenticated(authenticate());
  }, []);

  React.useEffect(() => {
    authenticated && navigate("/");
  }, [authenticated]);

  return <></>;
};

export default digid;
