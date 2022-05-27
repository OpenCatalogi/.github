import * as React from "react";
import { DashboardTemplate } from "../../templates/dashboard/DashboardTemplate";
import { SelfServicesTemplate } from "../../templates/templateParts/selfServices/SelfServicesTemplate";

const SelfServicesPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <SelfServicesTemplate />
    </DashboardTemplate>
  );
};

export default SelfServicesPage;
