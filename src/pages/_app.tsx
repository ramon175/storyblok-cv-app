import { Page } from "@/components/Page";
import { Paragraph } from "@/components/Paragraph";
import { Section } from "@/components/Section";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import type { AppProps } from "next/app";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  bridge: true,
  use: [apiPlugin],
  components: {
    page: Page,
    section: Section,
    paragraph: Paragraph,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
