import { Props } from "@/model/props";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { RestraintsCmp } from "../Global/Restraints";
import { SectionProps } from "../Section";

interface PageProps {
  header: string;
  body: [SectionProps];
  footer: string;
}

export const Page = ({ blok }: Props<PageProps>) => {
  return (
    <RestraintsCmp>
      <div {...storyblokEditable(blok)} key={blok._uid}>
        <StoryblokComponent blok={blok.body[0]} />
      </div>
    </RestraintsCmp>
  );
};
