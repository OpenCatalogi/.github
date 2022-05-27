import * as React from "react";
import { TextArea } from "@gemeente-denhaag/textarea";
import { ITextAreaProps, IReactHookFormProps } from "./types";

export const Textarea: React.FC<ITextAreaProps & IReactHookFormProps> = ({ name, validation, register, errors }) => (
  <TextArea {...register(name, { ...validation })} invalid={errors[name]} />
);
