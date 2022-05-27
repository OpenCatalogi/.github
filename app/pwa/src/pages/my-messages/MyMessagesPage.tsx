import * as React from "react";
import { DashboardTemplate } from "../../templates/dashboard/DashboardTemplate";
import { MyMessagesTemplate } from "../../templates/templateParts/myMessages/MyMessagesTemplate";

const MyMessagesPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <MyMessagesTemplate />
    </DashboardTemplate>
  );
};

export default MyMessagesPage;
