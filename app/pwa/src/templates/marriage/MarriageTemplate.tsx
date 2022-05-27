import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  IMoreInformationLink,
  StartServiceTemplate,
} from "../templateParts/selfServices/startService/StartServiceTemplate";

const MarriageTemplate: React.FC = () => {
  const { t } = useTranslation();

  const processSteps: string[] = [
    t("Choose between getting married or registered partnership"),
    t("Choose a date and time for the meeting"),
    t("Log in with DigID"),
    t("Your partner also logs in with DigID"),
    t("Invite witnesses"),
    t("Pay with IDEAL"),
    t("Your date is set!"),
  ];

  const moreInformationLinks: IMoreInformationLink[] = [
    {
      label: t("What are the differences between a marriage, a registered partnership and a cohabitation contract?"),
      href: "#",
    },
    { label: t("What is an emergency marriage and how can you arrange it?"), href: "#" },
  ];

  return (
    <StartServiceTemplate
      title={t("Marriage / Partnership")}
      description={t(
        "Are you getting married or getting a registerd partnership? Schedule a date and time. And make the official report to the municipality. Note: keep your DigiD to hand.",
      )}
      startServiceButton={{ label: t("Start Marriage / Partnership"), href: "/self-services/marriage/form" }}
      {...{ processSteps, moreInformationLinks }}
    />
  );
};

export default MarriageTemplate;
