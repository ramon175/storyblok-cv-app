import React from "react";
import styled from "@emotion/styled";

const Restraints = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 ${props => props.theme.margins.mobile};
  padding: ${props => props.theme.gutters.mobile};

  ${props => props.theme.breakpoint.md} {
    margin: 0 ${props => props.theme.margins.tablet};
  }

  ${props => props.theme.breakpoint.lg} {
    max-width: ${props => props.theme.maxWidth.desktop};
    margin: auto;
  }
  ${props => props.theme.breakpoint.xl} {
    max-width: ${props => props.theme.maxWidth.wide};
    margin: auto;
  }
`;

export const RestraintsCmp: React.FC<any> = ({ children }) => {
  return <Restraints>{children}</Restraints>;
};
