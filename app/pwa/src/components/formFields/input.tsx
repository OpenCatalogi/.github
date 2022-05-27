import * as React from "react";
import { TextField } from "@gemeente-denhaag/components-react";
import { ShowIcon, HideIcon } from "@gemeente-denhaag/icons";
import { IInputProps, IReactHookFormProps } from "./types";

export const InputPassword: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  validation,
  register,
  errors,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      {...{ disabled }}
      {...register(name, { ...validation })}
      invalid={errors[name]}
      icon={<span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <HideIcon /> : <ShowIcon />}</span>}
    />
  );
};

export const InputText: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  icon,
  register,
  errors,
}) => (
  <TextField
    type="text"
    {...{ defaultValue, disabled, icon }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputEmail: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  validation,
  icon,
  register,
  errors,
}) => (
  <TextField
    type="email"
    {...{ defaultValue, disabled, icon }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputDate: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  icon,
  validation,
  register,
  errors,
}) => (
  <TextField
    type="date"
    {...{ defaultValue, disabled, icon }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);

export const InputNumber: React.FC<IInputProps & IReactHookFormProps> = ({
  disabled,
  name,
  defaultValue,
  icon,
  validation,
  register,
  errors,
}) => (
  <TextField
    type="number"
    {...{ defaultValue, disabled, icon }}
    {...register(name, { ...validation })}
    invalid={errors[name]}
  />
);
