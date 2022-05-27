import * as React from "react";
import * as styles from "./LoginTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../../components/loginForm/LoginForm";

export const LoginTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Heading1 className={styles.header}>{t("Login")}</Heading1>
        <LoginForm />
      </div>
    </div>
  );
};
