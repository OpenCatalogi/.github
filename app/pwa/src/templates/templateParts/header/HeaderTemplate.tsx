import { faHotTub } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading2 } from "@gemeente-denhaag/components-react";
import * as React from "react";
import { Container } from "../../../components/container/Container";
import { ITopNavItem, PrimaryTopNav, SecondaryTopNav } from "../../../components/topNav/TopNav";
import * as styles from "./HeaderTemplate.module.css";
import { useTranslation } from "react-i18next";
import GitHubLogo from "./../../../assets/svgs/Github.svg";

export const HeaderTemplate: React.FC = () => {
  const { t } = useTranslation();

  const PrimaryTopNavItems: ITopNavItem[] = [
    { label: "Home", href: "/" },
    { label: "Software", href: "/software" },
    { label: "Data", href: "/data" },
    { label: `${t("Processes")}`, href: "/processes" },
    { label: "API's", href: "/apis" },
    { label: `${t("Information Models")}`, href: "/information-models" },
  ];

  const SecondaryTopNavItems: ITopNavItem[] = [
    { label: "Commonground", href: "/commonground" },
    { label: "Haven", href: "/haven" },
    { label: "NL Design", href: "/nldesign" },
    { label: "Github", href: "https://github.com/OpenCatalogi", icon: <FontAwesomeIcon icon={faHotTub} /> },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Container layoutClassName={styles.SecondaryNavContainer}>
          <SecondaryTopNav layoutClassName={styles.SecondaryNavWidth} items={SecondaryTopNavItems} />
        </Container>
      </div>
      <div className={styles.middle}>
        <Container>
          <Heading2>{t("Open Catalogs")}</Heading2>
          <span>{t("Reusable components within the government")}</span>
        </Container>
      </div>
      <div className={styles.bottom}>
        <Container layoutClassName={styles.PrimaryNavContainer}>
          <PrimaryTopNav layoutClassName={styles.PrimaryNavWidth} items={PrimaryTopNavItems} />
        </Container>
      </div>
    </header>
  );
};
