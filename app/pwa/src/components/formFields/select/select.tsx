import * as React from "react";
import * as styles from "./select.module.css";
import { Control, Controller, FieldValues } from "react-hook-form";
import ReactSelect from "react-select";
import { IReactHookFormProps } from "./../types";
import clsx from "clsx";

export interface ISelectValue {
  label: string;
  value: string;
}

interface ISelectProps {
  control: Control<FieldValues, any>;
  options: ISelectValue[];
  name: string;
}

export const SelectMultiple: React.FC<ISelectProps & ISelectProps & IReactHookFormProps> = ({
  name,
  options,
  errors,
  control,
  validation,
}) => {
  return (
    <Controller
      {...{ control, name }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <ReactSelect
            className={clsx(styles.select, styles.multi)}
            isMulti
            {...{ options, value, onChange, errors }}
          />
        );
      }}
    />
  );
};

export const SelectSingle: React.FC<ISelectProps & ISelectProps & IReactHookFormProps> = ({
  name,
  options,
  errors,
  control,
  validation,
}) => {
  return (
    <Controller
      {...{ control, name }}
      rules={validation}
      render={({ field: { onChange, value } }) => {
        return (
          <ReactSelect
            className={clsx(styles.select, styles.single)}
            {...{ options, onChange, value, errors }}
            isClearable
          />
        );
      }}
    />
  );
};
