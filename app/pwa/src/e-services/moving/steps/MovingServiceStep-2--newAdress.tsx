import * as React from "react";
import { FormFieldInput, FormFieldLabel, Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { InputNumber, InputText } from "../../../components/formFields";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MovingServiceContext } from "../MovingServiceContext";

interface MovingStepProps {
  setNextStep: () => void;
  setPreviousStep: () => void;
}

export const NewAdressFormStep: React.FC<MovingStepProps> = ({ setNextStep, setPreviousStep }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useContext(MovingServiceContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setValue("zipCode", formData.zipCode);
    setValue("houseNumber", formData.houseNumber);
  }, [formData]);

  const onSubmit = (data: any): void => {
    setFormData({ ...formData, zipCode: data.zipCode, houseNumber: data.houseNumber });
    setNextStep();
  };

  return (
    <FormStepTemplate title={t("What is your new address?")} {...{ setPreviousStep }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldInput>
          <FormFieldLabel htmlFor="zipCode">{t("Zip code")}</FormFieldLabel>
          <InputText name="zipCode" {...{ register, errors }} validation={{ required: true }} />
        </FormFieldInput>

        <FormFieldInput>
          <FormFieldLabel htmlFor="houseNumber">{t("House number")}</FormFieldLabel>
          <InputNumber name="houseNumber" {...{ register, errors }} validation={{ required: true }} />
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
