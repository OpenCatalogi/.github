import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container } from "../../../components/container/Container";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";
import { Button } from "@gemeente-denhaag/components-react";
import { changeLanguage } from "i18next";
import clsx from "clsx";
import { ImageDivider } from "../../../components/imageDivider/imageDivider";
import AuthenticatedDividerImage from "./../../../assets/images/AuthenticatedDivider.png";
import UnauthenticatedDividerImage from "./../../../assets/images/UnauthenticatedHeaderDivider.png";
import { AuthenticatedLogo, UnauthenticatedLogo } from "../../../components/logo/Logo";
import { useMe } from "../../../hooks/me";

interface AuthenticatedHeaderTemplateProps {
  layoutClassName?: string;
}

export const AuthenticatedHeaderTemplate: React.FC<AuthenticatedHeaderTemplateProps> = ({ layoutClassName }) => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = React.useState<string>("");

  const getUser = useMe().getMe();

  React.useEffect(() => {
    if (!getUser.isSuccess) return;
    setUsername(getUser.data.name);
  }, [getUser.isSuccess]);

  return (
    <header className={clsx(styles.authenticatedContainer, [layoutClassName && layoutClassName])}>
      <Container>
        <div className={styles.authenticatedContent}>
          <AuthenticatedLogo href="/" layoutClassName={styles.authenticatedLogo} />

          <div className={styles.usermanagment}>
            <a className={styles.username}>{`${t("Welcome")} ${username}`}</a>

            <Button onClick={() => navigate("/logout")}>{t("Logout")}</Button>
            <Button onClick={() => changeLanguage(i18n.language === "nl" ? "en" : "nl")} variant="secondary-action">
              {t("Translation")}
            </Button>
          </div>
        </div>
      </Container>
      <ImageDivider image={AuthenticatedDividerImage} layoutClassName={styles.authenticatedDivider} />
    </header>
  );
};

export const UnauthenticatedHeaderTemplate: React.FC = () => (
  <header className={styles.unauthenticatedContainer}>
    <Container>
      <div onClick={() => navigate("/")} className={styles.unauthenticatedContent}>
        <UnauthenticatedLogo href="/" layoutClassName={styles.unauthenticatedLogo} />
      </div>
    </Container>
    <ImageDivider image={UnauthenticatedDividerImage} layoutClassName={styles.unauthenticatedDivider} />
  </header>
);
