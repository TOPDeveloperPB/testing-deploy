import { SbBlokData } from "@storyblok/react";

export interface IStoryBlokAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: {};
  is_external_url: boolean;
}

export interface IStoryBlokLink {
  id: string;
  rel: string;
  url: string;
  title: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

export interface IStoryBlokComponent extends SbBlokData {
  _uid: string;
  _editable: string;
}

export interface IStoryBlokComponentString extends IStoryBlokComponent {
  value: string;
  component: "string";
}

export interface IStoryBlokComponentStringWithImage
  extends IStoryBlokComponent {
  value: string;
  image: IStoryBlokAsset;
  component: "string";
}
