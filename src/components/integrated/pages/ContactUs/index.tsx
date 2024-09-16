import { storyblokEditable } from "@storyblok/react/rsc";

export function ContactUs({ blok }: any) {
  return <div {...storyblokEditable(blok)}>{blok.title}</div>;
}
