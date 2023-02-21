import { Props } from "@/model/props";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { ParagraphProps } from "../Paragraph";
import React from "react";
import styled from "@emotion/styled";

export interface SectionProps {
  orientation: "horizontal" | "vertical";
  content: [ParagraphProps] | [SectionProps];
}

const StyledSection = styled.div<Pick<SectionProps, "orientation">>`
  width: 100%;
  display: ${props => (props.orientation === "horizontal" ? "block" : "flex")};
`;

export const Section: React.FC<Props<SectionProps>> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <StyledSection orientation={blok.orientation}>
        {blok.content.map(story => (
          <StoryblokComponent blok={story} />
        ))}
      </StyledSection>
    </div>
  );
};
