import * as React from "react";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import MovingTemplate from "../../../templates/moving/MovingTemplate";

const MovingPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <MovingTemplate />
    </DashboardTemplate>
  );
};

export default MovingPage;
