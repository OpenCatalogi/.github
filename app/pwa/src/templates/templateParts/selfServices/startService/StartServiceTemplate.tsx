import * as React from "react";
import * as styles from "./StartServiceTemplate.module.css";
import { Button, Divider, Heading1, Heading2, List, ListItem, Paragraph } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";

interface StartServiceTemplateProps {
  title: string;
  description: string;
  processSteps: string[];
  moreInformationLinks: IMoreInformationLink[];
  startServiceButton: {
    label: string;
    href: string;
  };
}

export interface IMoreInformationLink {
  label: string;
  href: string;
}

export const StartServiceTemplate: React.FC<StartServiceTemplateProps> = ({
  processSteps,
  moreInformationLinks,
  title,
  description,
  startServiceButton,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Heading1>{title}</Heading1>
        <Paragraph>{description}</Paragraph>
      </div>

      <Divider />

      <div>
        <Heading2>{t("What steps can you expect")}</Heading2>

        <List>
          {processSteps.map((step, idx) => (
            <ListItem className={styles.listItem} key={idx} primaryText={t(step)}></ListItem>
          ))}
        </List>
        <div onClick={() => navigate(startServiceButton.href)}>
          <Button icon={<ArrowRightIcon />} iconAlign="start">
            {startServiceButton.label}
          </Button>
        </div>
      </div>

      <Divider />

      <div className={styles.info}>
        <Heading2>{t("More Information")}</Heading2>
        <List>
          {moreInformationLinks.map((links, idx) => (
            <ListItem
              className={styles.listItem}
              key={idx}
              primaryText={t(links.label)}
              actionType="nav"
              onClick={() => navigate(links.href)}
            />
          ))}
        </List>
      </div>
    </div>
  );
};
