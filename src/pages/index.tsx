import Head from "next/head";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";
import { GetStaticProps } from "next";
import { StyleProvider } from "@/components/Global/StyleProvider";
import { NavBarCmp } from "@/components/Layout/NavBar";
import { FooterCmp } from "@/components/Layout/Footer";

export default function Home({ story: initialStory }: any) {
  const story = useStoryblokState(initialStory);

  if (story.content === null) {
    return <div>Loading...</div>;
  }

  return (
    <StyleProvider>
      <Head>
        <title>My CV App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarCmp />
      <main>
        <StoryblokComponent blok={story.content} />
      </main>
      <FooterCmp />
    </StyleProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  let slug = "home";

  const storyblokApi = getStoryblokApi();

  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600,
  };
};
