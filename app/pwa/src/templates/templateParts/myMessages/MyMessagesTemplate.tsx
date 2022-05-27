import * as React from "react";
import * as styles from "./MyMessagesTemplate.module.css";
import { Heading1, Tab, TabContext, TabPanel, Tabs } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { IMessageTableItem, MessagesTable } from "../../../components/messagesTable/MessagesTable";
import { useMessage } from "../../../hooks/message";
import Skeleton from "react-loading-skeleton";

export const MyMessagesTemplate: React.FC = () => {
  const [messages, setMessages] = React.useState<IMessageTableItem[]>([]);
  const [currentMessagesTab, setCurrentMessagesTab] = React.useState<number>(0);
  const { t } = useTranslation();

  const _useMessage = useMessage();
  const getMessages = _useMessage.getAll();

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
      <Heading1>{t("My messages")}</Heading1>

      <TabContext value={currentMessagesTab.toString()}>
        <Tabs
          className={styles.tabs}
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
  );
};
