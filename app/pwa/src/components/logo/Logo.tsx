import clsx from "clsx";
import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./Logo.module.css";

interface LogoProps {
  layoutClassName: string;
  href?: string;
}

export const AuthenticatedLogo: React.FC<LogoProps> = ({ layoutClassName, href }) => {
  return (
    <Link className={styles.logoContainer} to={href ?? "#"}>
      <div className={clsx(styles.authenticatedLogo, styles.logo, layoutClassName)} />
    </Link>
  );
};

export const UnauthenticatedLogo: React.FC<LogoProps> = ({ layoutClassName, href }) => {
  return (
    <Link className={styles.logoContainer} to={href ?? "#"}>
      <div className={clsx(styles.unauthenticatedLogo, styles.logo, layoutClassName)} />
    </Link>
  );
};
