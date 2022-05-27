import * as React from "react";
import {
  Step,
  StepExpandedIcon,
  StepHeader,
  StepHeading,
  StepList,
  StepMarker,
  StepSection,
  SubStep,
  SubStepHeading,
  SubStepList,
  SubStepMarker,
} from "@gemeente-denhaag/process-steps";

interface IStatusStep {
  title: string;
  checked?: boolean;
  current?: boolean;
  expanded?: boolean;
  subSteps?: string[];
}

interface StatusStepsProps {
  steps: IStatusStep[];
}

export const StatusSteps: React.FC<StatusStepsProps> = ({ steps }) => {
  return (
    <StepList>
      {steps.map(({ title, checked, current, expanded, subSteps }, idx) => (
        <Step key={idx} {...{ checked, current, expanded }}>
          <StepSection>
            <StepHeader>
              <StepMarker>{idx + 1}</StepMarker>
              <StepHeading>{title}</StepHeading>
              {subSteps && <StepExpandedIcon />}
            </StepHeader>
          </StepSection>
          {subSteps && (
            <SubStepList>
              {subSteps.map((subStep: string) => (
                <SubStep key={idx}>
                  <SubStepMarker />
                  <SubStepHeading>{subStep}</SubStepHeading>
                </SubStep>
              ))}
            </SubStepList>
          )}
        </Step>
      ))}
    </StepList>
  );
};
