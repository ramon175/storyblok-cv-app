import { SbBlokData } from "@storyblok/react";

export interface Props<T> {
  blok: SbBlokData & T;
}
