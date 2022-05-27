import * as React from "react";
import * as styles from "./EndServiceTemplate.module.css";
import { Button, Divider, Heading1, Heading2, Link } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { ArrowLeftIcon, ArrowRightIcon } from "@gemeente-denhaag/icons";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";

export interface ICollectedData {
  label: string;
  value: JSX.Element | string;
}

interface EndServiceTemplateProps {
  title: string;
  handleSubmit: () => void;
  setPreviousStep: () => void;
  collectedData: ICollectedData[];
}

export const EndServiceTemplate: React.FC<EndServiceTemplateProps> = ({
  title,
  handleSubmit,
  setPreviousStep,
  collectedData,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading1>{title}</Heading1>

      <Divider />

      <Heading2>{t("Information entered by you")}</Heading2>

      <Table>
        <TableBody>
          {collectedData.map((data) => (
            <TableRow className={styles.tableRow}>
              <TableHeader className={styles.tableHeader}>{data.label}</TableHeader>
              <TableCell className={styles.tableCell}>{data.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className={styles.buttonsContainer}>
        <div onClick={setPreviousStep}>
          <Link icon={<ArrowLeftIcon />} iconAlign="start">
            {t("Previous step")}
          </Link>
        </div>

        <Button icon={<ArrowRightIcon />} iconAlign="start" onClick={handleSubmit}>
          {t("Confirm")}
        </Button>
      </div>
    </div>
  );
};
