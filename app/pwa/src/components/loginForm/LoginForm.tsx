import * as React from "react";
import { useForm } from "react-hook-form";
import { handleLogin } from "./../../services/auth";
import APIContext from "../../apiService/apiContext";
import { Alert, Button, FormField, FormFieldInput, FormFieldLabel } from "@gemeente-denhaag/components-react";
import * as styles from "./LoginForm.module.css";
import { useTranslation } from "react-i18next";
import { InputPassword, InputText } from "../formFields/input";

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const API = React.useContext(APIContext);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [formError, setFormError] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    setFormError("");

    handleLogin(data, API)
      .catch((err) => {
        setFormError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      {formError && <Alert text={formError} title={t("Oops, something went wrong")} variant="error" />}

      <FormField>
        <FormFieldInput>
          <FormFieldLabel>{t("Username")}</FormFieldLabel>
          <InputText {...{ register, errors }} name="username" validation={{ required: true }} disabled={loading} />
        </FormFieldInput>
      </FormField>
      <FormField>
        <FormFieldLabel>{t("Password")}</FormFieldLabel>
        <FormFieldInput>
          <InputPassword {...{ register, errors }} name="password" validation={{ required: true }} disabled={loading} />
        </FormFieldInput>
      </FormField>

      <Button size="large" type="submit" disabled={loading}>
        {t("Send")}
      </Button>
    </form>
  );
};
