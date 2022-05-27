import * as React from "react";
import "../styling/index.css";
import * as styles from "./Layout.module.css";
import "./../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { StylesProvider } from "@gemeente-denhaag/components-react";
import { HeaderTemplate } from "../templates/templateParts/header/HeaderTemplate";
import { FooterTemplate } from "../templates/templateParts/footer/FooterTemplate";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [API] = React.useState<APIService>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });

    const JWT = sessionStorage.getItem("JWT");

    !API.authenticated && JWT && API.setAuthentication(JWT);
  }, [pageContext, location]);

  return (
    <div className={styles.layout}>
      <GatsbyProvider value={gatsbyContext}>
        <APIProvider value={API}>
          <StylesProvider>
            <HeaderTemplate />
            <div className={styles.pageContent}>{children}</div>
            <FooterTemplate />
          </StylesProvider>
        </APIProvider>
      </GatsbyProvider>
    </div>
  );
};

export default Layout;
