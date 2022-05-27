import * as React from "react";
import { Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MovingServiceContext } from "../MovingServiceContext";
import { InputCheckbox } from "../../../components/formFields";

interface MovingStepProps {
  setNextStep: () => void;
  setPreviousStep: () => void;
}

interface ICoMover {
  label: string;
  uuid: string;
}

export const CoMoversStep: React.FC<MovingStepProps> = ({ setNextStep, setPreviousStep }) => {
  const [coMovers] = React.useState<ICoMover[]>(testCoMovers);
  const [formData, setFormData] = React.useContext(MovingServiceContext);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    if (!formData.coMovers) return;

    formData.coMovers.forEach((coMover) => {
      setValue(coMover, true);
    });
  }, [formData]);

  const onSubmit = (data: any): void => {
    const selectedCoMovers: string[] = [];

    for (const [key, value] of Object.entries(data)) {
      value && selectedCoMovers.push(key);
    }

    setFormData({ ...formData, coMovers: selectedCoMovers });

    setNextStep();
  };

  return (
    <FormStepTemplate title={t("Who will move with you?")} {...{ setPreviousStep }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {coMovers.map(({ uuid, label }) => (
          <InputCheckbox key={uuid} name={uuid} {...{ register, errors, label }} />
        ))}

        <button type="submit">
          <Link icon={<ArrowRightIcon />} iconAlign="start">
            {t("Next step")}
          </Link>
        </button>
      </form>
    </FormStepTemplate>
  );
};

const testCoMovers: ICoMover[] = [
  { label: "Co mover: 1", uuid: "df24af62-8aaf-4057-8ede-c12045e0cc74" },
  { label: "Co mover: 2", uuid: "e293dff2-ae51-4606-86bd-36919c2e204f" },
  { label: "Co mover: 3", uuid: "ef26907d-388b-430f-8e26-36a3c3c55fb9" },
];
