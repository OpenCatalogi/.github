import * as React from "react";
import * as styles from "./FooterTemplate.module.css";
import { Container } from "../../../components/container/Container";
import { List, ListItem, ListSubheader } from "@gemeente-denhaag/list";
import { navigate } from "gatsby";
import { ImageDivider } from "../../../components/imageDivider/imageDivider";
import AuthenticatedDividerImage from "./../../../assets/images/AuthenticatedDivider.png";
import UnauthenticatedDividerImage from "./../../../assets/images/UnauthenticatedFooterDivider.png";
import { useTranslation } from "react-i18next";

export const AuthenticatedFooterTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.authenticated}>
      <ImageDivider image={AuthenticatedDividerImage} layoutClassName={styles.authenticatedImageDivider} />
      <Container>
        <div className={styles.inner}>
          <List>
            <ListSubheader className={styles.subHeader}>{t("The Hague")}</ListSubheader>
            <ListItem
              className={styles.listItem}
              primaryText={t("Go to website")}
              actionType="nav"
              onClick={() => navigate("#")}
            />
          </List>

          <List>
            <ListSubheader className={styles.subHeader}>{t("Disclaimers")}</ListSubheader>
            <ListItem
              className={styles.listItem}
              primaryText={t("Accessibility declaration")}
              actionType="nav"
              onClick={() => navigate("#")}
            />
            <ListItem
              className={styles.listItem}
              primaryText={t("Data Protection declaration")}
              actionType="nav"
              onClick={() => navigate("#")}
            />
            <ListItem
              className={styles.listItem}
              primaryText={t("Proclaimer")}
              actionType="nav"
              onClick={() => navigate("#")}
            />
          </List>
        </div>
      </Container>
    </footer>
  );
};

export const UnauthenticatedFooterTemplate: React.FC = () => {
  return (
    <footer className={styles.unauthenticated}>
      <ImageDivider image={UnauthenticatedDividerImage} layoutClassName={styles.unauthenticatedImageDivider} />
    </footer>
  );
};
