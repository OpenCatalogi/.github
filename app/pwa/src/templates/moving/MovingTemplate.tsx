import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  IMoreInformationLink,
  StartServiceTemplate,
} from "../templateParts/selfServices/startService/StartServiceTemplate";

const MovingTemplate: React.FC = () => {
  const { t } = useTranslation();

  const processSteps: string[] = [
    t("Choose your current addres"),
    t("Choose your new address"),
    t("Log in with DigID"),
    t("And your set!"),
  ];

  const moreInformationLinks: IMoreInformationLink[] = [
    {
      label: t("What is a zipcode?"),
      href: "#",
    },
    { label: t("What do I do when I settle in a different municipality?"), href: "#" },
  ];

  return (
    <StartServiceTemplate
      title={t("Moving away")}
      description={t(
        "Are you moving to a different house? Schedule a date and time. And make the official report to the municipality. Note: keep your DigiD to hand.",
      )}
      startServiceButton={{ label: t("Start moving away"), href: "/self-services/moving/form" }}
      {...{ processSteps, moreInformationLinks }}
    />
  );
};

export default MovingTemplate;
