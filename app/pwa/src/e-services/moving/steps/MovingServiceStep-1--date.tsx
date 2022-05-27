import * as React from "react";
import { FormFieldInput, FormFieldLabel, Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { InputDate } from "../../../components/formFields";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MovingServiceContext } from "../MovingServiceContext";

interface MovingStepProps {
  setNextStep: () => void;
}

export const DateFormStep: React.FC<MovingStepProps> = ({ setNextStep }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useContext(MovingServiceContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setValue("date", formData.date);
  }, [formData]);

  const onSubmit = (data: any): void => {
    setFormData({ ...formData, date: data.date });
    setNextStep();
  };

  return (
    <FormStepTemplate title={t("On what date are you moving?")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldInput>
          <FormFieldLabel htmlFor="date">{t("Moving date")}</FormFieldLabel>
          <InputDate name="date" {...{ register, errors }} validation={{ required: true }} />
        </FormFieldInput>

        <button type="submit">
          <Link icon={<ArrowRightIcon />} iconAlign="start">
            {t("Next step")}
          </Link>
        </button>
      </form>
    </FormStepTemplate>
  );
};
