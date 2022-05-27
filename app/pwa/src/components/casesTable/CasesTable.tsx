import * as React from "react";
import * as styles from "./CasesTable.module.css";
import { Link } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@gemeente-denhaag/table";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { navigate } from "gatsby";
import { translateDate } from "../../services/dateFormat";

interface CasesTableProps {
  cases: any[];
}

export const CasesTable: React.FC<CasesTableProps> = ({ cases }) => {
  const { t, i18n } = useTranslation();

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHeader>{t("Title")}</TableHeader>
          <TableHeader>{t("Status")}</TableHeader>
          <TableHeader>{t("Date")}</TableHeader>
          <TableHeader />
        </TableRow>
        {cases.map((_case) => (
          <TableRow key={_case.id} className={styles.contentRow}>
            <TableCell>{_case.omschrijving}</TableCell>
            <TableCell>{_case.status}</TableCell>
            <TableCell>{translateDate(i18n.language, _case.startdatum)}</TableCell>

            <TableCell onClick={() => navigate(`/my-cases/${_case.uuid}`)}>
              <Link icon={<ArrowRightIcon />} iconAlign="start">
                {t("View case")}
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
