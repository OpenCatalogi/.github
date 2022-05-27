import * as React from "react";
import * as styles from "./ComponentsTemplate.module.css";
import { Container } from "../../components/container/Container";
import { FormField, FormFieldInput, FormFieldLabel, Heading2 } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { InputText, SelectMultiple } from "../../components/formFields";
import { SearchIcon } from "@gemeente-denhaag/icons";
import { ISelectValue } from "../../components/formFields/select/select";

export const ComponentsTemplate: React.FC = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const watchSearchForm = watch();

  React.useEffect(() => {
    const name: string = watchSearchForm.name;
    const types: string[] = watchSearchForm.types?.map((type: any) => type.value);
  }, [watchSearchForm]);

  return (
    <Container layoutClassName={styles.container}>
      <div className={styles.header}>
        <Heading2>Components</Heading2>
        <span className={styles.subHeader}>Donec id elit non mi porta gravida at eget metus.</span>
      </div>

      <form className={styles.form}>
        <FormField>
          <FormFieldInput>
            <FormFieldLabel>Filter op naam</FormFieldLabel>
            <InputText {...{ register, errors }} name="name" icon={<SearchIcon />} validation={{ required: true }} />
          </FormFieldInput>
        </FormField>

        <FormField>
          <FormFieldInput>
            <FormFieldLabel>Filter op type</FormFieldLabel>
            <SelectMultiple name="types" options={types} {...{ errors, control, register }} />
          </FormFieldInput>
        </FormField>
      </form>
    </Container>
  );
};

const types: ISelectValue[] = [
  { label: "Software", value: "software" },
  { label: "Data", value: "data" },
  { label: "Processen", value: "process" },
  { label: "API's", value: "api" },
  { label: "Informatie modellen", value: "information-model" },
];
