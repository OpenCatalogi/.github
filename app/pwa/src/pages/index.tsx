import * as React from "react";
import { isLoggedIn } from "../services/auth";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { LandingTemplate } from "../templates/landing/LandingTemplate";
import { OverviewTemplate } from "../templates/templateParts/overview/OverviewTemplate";

const IndexPage: React.FC = () => {
  if (isLoggedIn()) return <AuthenticatedIndex />;

  return <UnauthenticatedIndex />;
};

export default IndexPage;

const AuthenticatedIndex: React.FC = () => (
  <DashboardTemplate>
    <OverviewTemplate />
  </DashboardTemplate>
);

const UnauthenticatedIndex: React.FC = () => <LandingTemplate />;
