import { TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import * as styles from "./EditableTableRow.module.css";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@gemeente-denhaag/components-react";
import { CheckedIcon, CloseIcon, EditIcon } from "@gemeente-denhaag/icons";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { InputEmail, InputText } from "../formFields";

interface InputTypes {
  inputType: "text" | "email";
}

interface EditableTableRowProps {
  thead: string;
  value: string;
  handleSave: (value: any) => void;
}

export const EditableTableRow: React.FC<EditableTableRowProps & InputTypes> = ({
  thead,
  value,
  inputType,
  handleSave,
}) => {
  const [editing, setEditing] = React.useState<boolean>(false);

  return (
    <TableRow>
      <TableHeader className={styles.th}>{thead}</TableHeader>

      {editing && <EditingTableRow {...{ value, inputType, handleSave, setEditing }} />}
      {!editing && <RegularTableRow {...{ value, setEditing }} />}
    </TableRow>
  );
};

/**
 * Specific rows based on editing (Regular: not editing & Editing: editing)
 */

interface SpecificRowsProps {
  value: string;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegularTableRow: React.FC<SpecificRowsProps> = ({ value, setEditing }) => {
  const { t } = useTranslation();

  return (
    <>
      <TableCell>{value}</TableCell>

      <TableCell>
        <div className={styles.editButton} onClick={() => setEditing(true)}>
          <Link icon={<EditIcon />} iconAlign="start">
            {t("Edit")}
          </Link>
        </div>
      </TableCell>
    </>
  );
};

interface EditingTableRowProps {
  handleSave: (value: any) => void;
}

const EditingTableRow: React.FC<SpecificRowsProps & EditingTableRowProps & InputTypes> = ({
  value,
  setEditing,
  handleSave,
  inputType,
}) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any): void => {
    handleSave(data.value);
    setEditing(false);
  };

  return (
    <>
      <TableCell>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField {...{ inputType, value, register, errors }} />

          <div className={styles.editButtonsContainer}>
            <button type="submit" className={styles.submit}>
              <Link icon={<CheckedIcon />} iconAlign="start">
                {t("Save")}
              </Link>
            </button>

            <div onClick={() => setEditing(false)}>
              <Link icon={<CloseIcon />} iconAlign="start" className={styles.cancel}>
                {t("Cancel")}
              </Link>
            </div>
          </div>
        </form>
      </TableCell>

      <TableCell />
    </>
  );
};

interface FormFieldProps {
  value: string;
  register: UseFormRegister<FieldValues>;
  errors: {
    [x: string]: any;
  };
}

const FormField: React.FC<FormFieldProps & InputTypes> = ({ inputType, value, register, errors }) => {
  switch (inputType) {
    case "email":
      return <InputEmail defaultValue={value} {...{ register, errors }} name="value" validation={{ required: true }} />;
    case "text":
      return <InputText defaultValue={value} {...{ register, errors }} name="value" validation={{ required: true }} />;
  }
};
