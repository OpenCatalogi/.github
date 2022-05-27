import * as React from "react";
import * as styles from "./OverviewTemplate.module.css";
import { Heading1, Heading3, Link, Tab, TabContext, TabPanel, Tabs, Card } from "@gemeente-denhaag/components-react";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { CasesTable } from "../../../components/casesTable/CasesTable";
import { IMessageTableItem, MessagesTable } from "../../../components/messagesTable/MessagesTable";
import { useQueryClient } from "react-query";
import { useCase } from "../../../hooks/case";
import Skeleton from "react-loading-skeleton";
import { useMessage } from "../../../hooks/message";

export const OverviewTemplate: React.FC = () => {
  const { t } = useTranslation();

  const [currentMessagesTab, setCurrentMessagesTab] = React.useState<number>(0);
  const [currentCasesTab, setCurrentCasesTab] = React.useState<number>(0);

  const [currentCases, setCurrentCases] = React.useState<any[]>([]);
  const [closedCases, setClosedCases] = React.useState<any[]>([]);

  const [messages, setMessages] = React.useState<IMessageTableItem[]>([]);

  const queryClient = useQueryClient();
  const _useCase = useCase(queryClient);
  const getCases = _useCase.getAll();

  const _useMessage = useMessage();
  const getMessages = _useMessage.getAll();

  React.useEffect(() => {
    if (!getCases.isSuccess) return;

    setCurrentCases(getCases.data.filter((_case) => _case.archiefstatus === "nog_te_archiveren"));
    setClosedCases(getCases.data.filter((_case) => _case.archiefstatus !== "nog_te_archiveren"));
  }, [getCases.isSuccess]);

  React.useEffect(() => {
    if (!getMessages.isSuccess) return;

    const _messages: IMessageTableItem[] = getMessages.data.map((message) => ({
      organisation: message.bronorganisatie,
      date: message.registratiedatum,
      id: message.id,
    }));

    setMessages(_messages);
  }, [getMessages.isSuccess]);

  return (
    <div className={styles.container}>
      <Heading1>{t("Overview")}</Heading1>

      <div className={styles.services}>
        <div className={styles.servicesHeading}>
          <Heading3>{t("Self services")}</Heading3>

          <div onClick={() => navigate("/self-services")}>
            <Link icon={<ArrowRightIcon />} iconAlign="start">
              {t("View all products and services")}
            </Link>
          </div>
        </div>
        <div className={styles.grid}>
          <Card
            className={styles.card}
            title={t("Marriage / Partnership")}
            onClick={() => navigate("/self-services/marriage")}
          />
          <Card className={styles.card} title={t("Moving away")} onClick={() => navigate("/self-services/moving")} />
          <Card className={styles.card} title={t("Birth registration")} />
          <Card className={styles.card} title={t("1st Registration")} />
        </div>
      </div>

      <div className={styles.messages}>
        <div className={styles.messagesHeading}>
          <Heading3>{t("My messages")}</Heading3>

          <div onClick={() => navigate("/my-messages")}>
            <Link icon={<ArrowRightIcon />} iconAlign="start">
              {t("Show all messages")}
            </Link>
          </div>
        </div>

        <TabContext value={currentMessagesTab.toString()}>
          <Tabs
            value={currentMessagesTab}
            onChange={(_, newValue: number) => {
              setCurrentMessagesTab(newValue);
            }}
          >
            <Tab label={t("Unread messages")} value={0} />
            <Tab label={t("Read messages")} value={1} />
          </Tabs>

          {getMessages.isLoading && <Skeleton height="100px" />}

          <TabPanel value="0">{!getMessages.isLoading && <MessagesTable {...{ messages }} />}</TabPanel>
          <TabPanel value="1">{!getMessages.isLoading && <MessagesTable {...{ messages }} />}</TabPanel>
        </TabContext>
      </div>

      <div className={styles.cases}>
        <div className={styles.casesHeading}>
          <Heading3>{t("My cases")}</Heading3>

          <div onClick={() => navigate("/my-cases")}>
            <Link icon={<ArrowRightIcon />} iconAlign="start">
              {t("Show all cases")}
            </Link>
          </div>
        </div>

        <TabContext value={currentCasesTab.toString()}>
          <Tabs
            value={currentCasesTab}
            onChange={(_, newValue: number) => {
              setCurrentCasesTab(newValue);
            }}
          >
            <Tab label={t("Current cases")} value={0} />
            <Tab label={t("Closed cases")} value={1} />
          </Tabs>

          {getCases.isLoading && <Skeleton height="100px" />}

          <TabPanel value="0">{!getCases.isLoading && <CasesTable cases={currentCases} />}</TabPanel>
          <TabPanel value="1">{!getCases.isLoading && <CasesTable cases={closedCases} />}</TabPanel>
        </TabContext>
      </div>
    </div>
  );
};
