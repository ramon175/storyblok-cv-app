import { Props } from "@/model/props";
import { storyblokEditable } from "@storyblok/react";
import React from "react";
import styled from "@emotion/styled";

export interface ParagraphProps {
  title: string;
  description: string;
}

const StyledParagraph = styled.div`
  padding: 0 12px;
`;

export const Paragraph: React.FC<Props<ParagraphProps>> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <StyledParagraph>
        <h1>{blok.title}</h1>
        <p>{blok.description}</p>
      </StyledParagraph>
    </div>
  );
};
