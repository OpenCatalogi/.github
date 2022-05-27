import * as React from "react";
import { PageProps } from "gatsby";
import { DashboardTemplate } from "../../../templates/dashboard/DashboardTemplate";
import { CaseDetailTemplate } from "../../../templates/templateParts/caseDetail/CaseDetailTemplate";

const CurrentCasesPage: React.FC<PageProps> = (props: PageProps) => {
  return (
    <DashboardTemplate>
      <CaseDetailTemplate caseId={props.params.caseId} />
    </DashboardTemplate>
  );
};

export default CurrentCasesPage;
