import * as React from "react";
import { DashboardTemplate } from "../../templates/dashboard/DashboardTemplate";
import { MyCasesTemplate } from "../../templates/templateParts/myCases/MyCasesTemplate";

const MyCasespage: React.FC = () => {
  return (
    <DashboardTemplate>
      <MyCasesTemplate />
    </DashboardTemplate>
  );
};

export default MyCasespage;
