import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, FormField, FormFieldInput, FormFieldLabel } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { Textarea } from "../formFields";

export const MessageForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //the empty onSubmit is dependend on an API to function. This API is not yet implemented
  const onSubmit = async () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormFieldInput>
          <FormFieldLabel>{t("Message")}</FormFieldLabel>
          <Textarea {...{ register, errors }} name="message" validation={{ required: true }} />
        </FormFieldInput>
      </FormField>
      <Button size="large" type="submit">
        {t("Send")}
      </Button>
    </form>
  );
};
