import Spacing from "@/components/storyblok/spacing";

export const blockResolver: any = {
  ["spacing"]: (props: any) => <Spacing blok={props} />,
};
