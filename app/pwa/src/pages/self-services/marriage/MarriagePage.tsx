import * as React from "react";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import MarriageTemplate from "../../../templates/marriage/MarriageTemplate";

const MarriagePage: React.FC = () => {
  return (
    <DashboardTemplate>
      <MarriageTemplate />
    </DashboardTemplate>
  );
};

export default MarriagePage;
