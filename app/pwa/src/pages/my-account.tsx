import * as React from "react";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { MyAccountTemplate } from "../templates/templateParts/myAccount/MyAccountTemplate";

const MyAccountPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <MyAccountTemplate />
    </DashboardTemplate>
  );
};

export default MyAccountPage;
