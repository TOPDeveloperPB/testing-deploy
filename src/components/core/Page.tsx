import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export function PageStyled({ blok }: any) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="grid w-full max-w-[1128px] gap-[96px] mx-auto"
    >
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
