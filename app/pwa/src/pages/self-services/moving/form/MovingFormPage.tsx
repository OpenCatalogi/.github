import * as React from "react";
import { MovingServiceForm } from "../../../../e-services/moving/MovingServiceForm";
import { DashboardTemplate } from "../../../../templates/dashboard/DashboardTemplate";

const MovingFormPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <MovingServiceForm />
    </DashboardTemplate>
  );
};

export default MovingFormPage;
