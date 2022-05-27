import { Link } from "@gemeente-denhaag/components-react";
import * as React from "react";
import * as styles from "./FormStepTemplate.module.css";
import { ArrowLeftIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";

interface FormStepTemplateProps {
  title: string;
  setPreviousStep?: () => void;
}

export const FormStepTemplate: React.FC<FormStepTemplateProps> = ({ children, setPreviousStep, title }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <div className={styles.formContainer}>
        {children}

        <div className={styles.previousStep} onClick={setPreviousStep}>
          <Link icon={<ArrowLeftIcon />} iconAlign="start" disabled={!setPreviousStep}>
            {t("Previous step")}
          </Link>
        </div>
      </div>
    </div>
  );
};
