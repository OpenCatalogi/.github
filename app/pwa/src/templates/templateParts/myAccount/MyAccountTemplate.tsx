import * as React from "react";
import * as styles from "./MyAccountTemplate.module.css";
import { Heading1, Heading3, Link } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableRow, TableCell, TableHeader } from "@gemeente-denhaag/table";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";
import { EditableTableRow } from "../../../components/editableTableRow/EditableTableRow";
import dateFormat from "dateformat";
import { navigate } from "gatsby";

export const MyAccountTemplate: React.FC = () => {
  const { t } = useTranslation();

  const handleSaveEmail = (value: string) => {
    // Add logic to send new e-mail to gateawy
  };

  const handleSavePhoneNumber = (value: string) => {
    // Add logic to send new phone number to gateawy
  };

  return (
    <div className={styles.container}>
      <Heading1 className={styles.heading}>{t("My account")}</Heading1>

      <div className={styles.block}>
        <Heading3>{t("Contact")}</Heading3>

        <Table>
          <TableBody>
            <EditableTableRow
              inputType="email"
              handleSave={handleSaveEmail}
              thead={t("Email address")}
              value="jane@doe.com"
            />
            <EditableTableRow
              inputType="text"
              handleSave={handleSavePhoneNumber}
              thead={t("Phone number")}
              value="060 000 00 00"
            />
          </TableBody>
        </Table>
      </div>

      <div className={styles.block}>
        <Heading3>{t("Notifications and updates")}</Heading3>

        <Table>
          <TableBody>
            <TableRow>
              <TableHeader className={styles.th}>{t("Case updates")}</TableHeader>
              <TableCell>Update</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("News about my neighbourhood")}</TableHeader>
              <TableCell>News</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Tips")}</TableHeader>
              <TableCell>Tips</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className={styles.block}>
        <Heading3>{t("Personal details")}</Heading3>

        <Table>
          <TableBody>
            <TableRow>
              <TableHeader className={styles.th}>{t("First names")}</TableHeader>
              <TableCell>Urbain Achilles Anna Maria</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Last name")}</TableHeader>
              <TableCell>Zijda</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Gender")}</TableHeader>
              <TableCell>man</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Citizen service number")}</TableHeader>
              <TableCell>900050287</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Date of birth")}</TableHeader>
              <TableCell>{dateFormat(new Date(), "dd-mm-yyyy")}</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Place of birth")}</TableHeader>
              <TableCell>Pakistan</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Nationality")}</TableHeader>
              <TableCell>Nederlandse</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className={styles.block}>
        <Heading3>{t("Address")}</Heading3>

        <Table>
          <TableBody>
            <TableRow>
              <TableHeader className={styles.th}>Street</TableHeader>
              <TableCell>Gagelplein 5</TableCell>
              <TableCell className={styles.link}>
                <div onClick={() => navigate("/self-services/moving")}>
                  <Link icon={<ArrowRightIcon />} iconAlign="start">
                    {t("Report relocation")}
                  </Link>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Postal code and city")}</TableHeader>
              <TableCell>2563 TT Den Haag</TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableHeader className={styles.th}>{t("Number of people on your address")}</TableHeader>
              <TableCell>3</TableCell>
              <TableCell className={styles.link}>
                <Link icon={<ArrowRightIcon />} iconAlign="start">
                  {t("Report incorrect registrations")}
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
