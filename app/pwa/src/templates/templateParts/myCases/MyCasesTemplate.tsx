import * as React from "react";
import * as styles from "./MyCasesTemplate.module.css";
import { Heading1, Tab, TabContext, TabPanel, Tabs, Card } from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import { useCase } from "../../../hooks/case";
import Skeleton from "react-loading-skeleton";

export const MyCasesTemplate: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [currentCases, setCurrentCases] = React.useState<any[]>([]);
  const [closedCases, setClosedCases] = React.useState<any[]>([]);

  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const _useCase = useCase(queryClient);
  const getCases = _useCase.getAll();

  React.useEffect(() => {
    if (!getCases.isSuccess) return;

    setCurrentCases(getCases.data.filter((_case) => _case.archiefstatus === "nog_te_archiveren"));
    setClosedCases(getCases.data.filter((_case) => _case.archiefstatus !== "nog_te_archiveren"));
  }, [getCases.isSuccess]);

  return (
    <div className={styles.container}>
      <Heading1>{t("My cases")}</Heading1>

      <TabContext value={value.toString()}>
        <Tabs
          value={value}
          onChange={(_, newValue: number) => {
            setValue(newValue);
          }}
          className={styles.tabs}
        >
          <Tab label={t("Current cases")} value={0} />
          <Tab label={t("Closed cases")} value={1} />
        </Tabs>

        {getCases.isLoading && <Skeleton width="370px" height="220px" />}

        <TabPanel value="0">
          <div className={styles.grid}>
            {currentCases.map((_case) => (
              <Card
                key={_case.id}
                date={new Date(_case.startdatum)}
                title={_case.omschrijving}
                subTitle={_case.identificatie}
                onClick={() => navigate(`/my-cases/${_case.uuid}`)}
                variant="case"
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel value="1">
          <div className={styles.grid}>
            {closedCases.map((_case) => (
              <Card
                key={_case.uuid}
                date={new Date(_case.startdatum)}
                title={_case.omschrijving}
                subTitle={_case.identificatie}
                onClick={() => navigate(`/my-cases/${_case.uuid}`)}
                variant="case"
                archived
              />
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};
