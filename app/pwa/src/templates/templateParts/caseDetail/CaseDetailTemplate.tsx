import * as React from "react";
import * as styles from "./CaseDetailTemplate.module.css";
import {
  Divider,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Tab,
  TabContext,
  TabPanel,
  Tabs,
} from "@gemeente-denhaag/components-react";
import { navigate } from "gatsby";
import {
  ChevronLeftIcon,
  ArchiveIcon,
  CalendarIcon,
  MegaphoneIcon,
  DocumentIcon,
  ArrowRightIcon,
} from "@gemeente-denhaag/icons";
import { MetaIconGridTemplate } from "../metaIconGrid/MetaIconGridTemplate";
import { StatusSteps } from "../../../components/statusSteps/StatusSteps";
import { DownloadCard } from "../../../components/card";
import { useTranslation } from "react-i18next";
import { useCase } from "../../../hooks/case";
import { useQueryClient } from "react-query";
import Skeleton from "react-loading-skeleton";
import { IMessageTableItem, MessagesTable } from "../../../components/messagesTable/MessagesTable";
import { MessageForm } from "../../../components/MessageForm/MessageForm";
import { useMessage } from "../../../hooks/message";

interface CaseDetailTemplateProps {
  caseId: string;
}

export const CaseDetailTemplate: React.FC<CaseDetailTemplateProps> = ({ caseId }) => {
  const { t } = useTranslation();
  const [currentMessagesTab, setCurrentMessagesTab] = React.useState<number>(0);
  const [messages, setMessages] = React.useState<IMessageTableItem[]>([]);

  const queryClient = useQueryClient();

  const _useCase = useCase(queryClient);
  const getCase = _useCase.getOne(caseId);

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
      {!getCase.isLoading && (
        <>
          <Heading1>{getCase.data.omschrijving}</Heading1>

          <MetaIconGridTemplate
            metaIcons={[
              { icon: <ArchiveIcon />, label: t("Case number"), value: getCase.data.identificatie ?? t("Unknown") },
              {
                icon: <CalendarIcon />,
                label: t("Application date"),
                value: getCase.data.registratiedatum ?? t("Unknown"),
              },
              { icon: <MegaphoneIcon />, label: t("Status"), value: getCase.data.status ?? t("Unknown") },
              { icon: <DocumentIcon />, label: t("Documents"), value: getCase.data.zaakobjecten ?? t("Unknown") },
            ]}
          />

          <Divider />

          <div className={styles.status}>
            <Heading2>{t("Current status")}</Heading2>

            <StatusSteps
              steps={[
                {
                  title: "Registered",
                  checked: true,
                  subSteps: ["Consectetur ac, vestibulum at eros."],
                },
                {
                  title: "Accepted",
                  checked: true,
                  expanded: true,
                  subSteps: ["Curabitur blandit tempus porttitor."],
                },
                {
                  title: "Under consideration",
                  expanded: true,
                  subSteps: ["Nullam id dolor id nibh ultricies vehicula."],
                },
                {
                  title: "Concluded",
                },
              ]}
            />
          </div>

          <Divider />

          <div className={styles.documents}>
            <div className={styles.documentsHeader}>
              <Heading2>{t("Documents")}</Heading2>

              <Link icon={<ArrowRightIcon />} iconAlign="start">
                {t("Show all documents")}
              </Link>
            </div>

            <DownloadCard
              layoutClassName={styles.downloadCard}
              icon={<DocumentIcon />}
              label="Bezwaar maken overige zaken - DigiD.pdf"
              sizeKb="134"
            />
          </div>
        </>
      )}

      {getCase.isLoading && <Skeleton height="300px" />}

      <Divider />

      <div className={styles.messages}>
        <div className={styles.messagesHeading}>
          <Heading2>{t("Messages")}</Heading2>
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
      <div className={styles.messages}>
        <div className={styles.messagesHeading}>
          <Heading3>{t("Add another message to this case")}</Heading3>
        </div>

        <MessageForm />
      </div>
    </div>
  );
};
