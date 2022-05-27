import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface IReactHookFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  validation?: Omit<RegisterOptions<FieldValues, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

export interface IInputProps {
  name: string;
  icon?: JSX.Element;
  disabled?: boolean;
  defaultValue?: string;
}

export interface ITextAreaProps {
  name: string;
  disabled?: boolean;
  defaultValue?: string;
}

export interface ICheckboxProps {
  label: string;
  name: string;
}
