"use client";
import {
  IStoryBlokAsset,
  IStoryBlokComponent,
  IStoryBlokComponentString,
} from "@/types";
import { Text } from "@/components/core";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface IOfficeSB extends IStoryBlokComponent {
  name: string;
  image: IStoryBlokAsset;
  component: "office";
}

interface IContactBlockSB extends IStoryBlokComponent {
  title: string;
  remark?: string;
  content: IStoryBlokComponentString[];
  component: string;
}

export function ContactUsForAllOfYourLanguageTranslationQuestions({
  blok,
}: any) {
  const { title, offices, contact_info, offices_title, offices_description } =
    blok as {
      title: string;
      offices: IOfficeSB[];
      contact_info: IContactBlockSB[];
      offices_title: string;
      offices_description: string;
    };

  const [selectedOffice, setSelectedOffice] = useState(offices.at(0));

  return (
    <div {...storyblokEditable(blok)} className="grid gap-6">
      <Text
        as="h1"
        variant="Heading/Heading-1"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid grid-cols-3 gap-6">
        {contact_info.map((blok) => (
          <div
            {...storyblokEditable(blok)}
            key={blok._uid}
            className="p-6 grid gap-4 bg-ffffff rounded-[16px] content-start"
          >
            <div className="grid gap-2">
              <Text as="h4" variant="Heading/Heading-4" className="text-121212">
                {blok.title}
              </Text>
              {blok.content.map((item) => (
                <Text
                  key={item._uid}
                  variant="Paragraph/Paragraph-1"
                  className="text-121212"
                >
                  {item.value}
                </Text>
              ))}
            </div>
            {!!blok.remark && (
              <Text variant="Heading/Heading-4">{blok.remark}</Text>
            )}
          </div>
        ))}
      </div>
      <div className="grid gap-[28px]">
        <div className="bg-ffffff rounded-[16px] p-6 grid gap-2">
          <Text as="h4" variant="Heading/Heading-4">
            {offices_title}
          </Text>
          <div className="grid gap-1">
            <Text variant="Paragraph/Paragraph-1">{offices_description}</Text>
            <div className="grid grid-cols-2 gap-4">
              {offices.map((blok, index) => {
                const isFirstColumn = index % 2 === 0;
                const setActive = () => setSelectedOffice(blok);
                return (
                  <div
                    {...storyblokEditable(blok)}
                    key={blok._uid}
                    onClick={setActive}
                    className="p-4 bg-[#FFF5F0] rounded-[16px] relative cursor-pointer hover:opacity-75 transition-all active:scale-95"
                  >
                    <Text
                      className={cn(
                        "text-[24px] leading-[36px] tracking-[0.01em] font-bold uppercase text-da5001 absolute top-6 z-10",
                        isFirstColumn ? "left-6" : "right-6"
                      )}
                    >
                      {blok.name}
                    </Text>
                    <div className="relative">
                      <Image
                        width={0}
                        height={0}
                        alt={blok.image.alt}
                        src={blok.image.filename}
                        className={cn(
                          "w-full h-[141px] object-cover ",
                          isFirstColumn
                            ? "[clip-path:_url(#ClipFirst)]"
                            : "[clip-path:_url(#ClipSecond)]"
                        )}
                      />

                      <ClipFirst />
                      <ClipSecond />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>Map for {selectedOffice?.name}</div>
      </div>
    </div>
  );
}

function ClipFirst() {
  return (
    <svg width="0" height="0" viewBox="0 0 500 141" fill="none">
      <defs>
        <clipPath id="ClipFirst">
          <path
            d="M484 0H331.181C311.834 0 296.15 15.6839 296.15 35.0311C296.15 54.3782 280.466 70.0621 261.119 70.0621H32C14.3269 70.0621 0 84.389 0 102.062V125C0 133.837 7.16345 141 16 141H484C492.837 141 500 133.837 500 125V16C500 7.16344 492.837 0 484 0Z"
            fill="none"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function ClipSecond() {
  return (
    <svg width="0" height="0" viewBox="0 0 500 141" fill="none">
      <defs>
        <clipPath id="ClipSecond">
          <path
            d="M16 0H168.819C188.166 0 203.85 15.6839 203.85 35.0311C203.85 54.3782 219.534 70.0621 238.881 70.0621H468C485.673 70.0621 500 84.389 500 102.062V125C500 133.837 492.837 141 484 141H16C7.16345 141 0 133.837 0 125V16C0 7.16344 7.16345 0 16 0Z"
            fill="none"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
