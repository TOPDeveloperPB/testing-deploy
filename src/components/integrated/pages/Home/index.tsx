"use client";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";

export function Home({ story }: any) {
  story = useStoryblokState(story);
  console.log(story);

  return <StoryblokComponent blok={story.content} />;
}
