"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowSwapIcon } from "@/public/icons";
import { storyblokEditable } from "@storyblok/react";
import { Button, Select, Text } from "@/components/core";
import { findFlagUrlByIso2Code } from "country-flags-svg";
import { euFlagPlaceholder, languagesOptions } from "@/lib/const";

interface LanguagePair {
  first?: string;
  second?: string;
}

export function WhatLanguageDoWeTranslate({ blok }: any) {
  const [languagesState, setLanguagesState] = useState<LanguagePair>();

  const handleSwap = () =>
    setLanguagesState((prev) => ({ first: prev?.second, second: prev?.first }));

  const areBothLanguagesSelected =
    !!languagesState?.first && !!languagesState.second;

  const {
    title,
    description,
    image,
    success,
    same_language,
    main_button,
    secondary_button,
  } = blok;

  const successWithValues = success
    .replace("{languages.first}", languagesState?.first)
    .replace("{languages.second}", languagesState?.second);

  const filterOptions = (
    option: (typeof languagesOptions)[number],
    search: string
  ) => {
    const searchLower = search.toLowerCase();

    if (searchLower.length > 0 && typeof option !== "string" && option.top) {
      return false;
    }

    if (typeof option === "string") {
      return option.toLowerCase().startsWith(searchLower);
    } else if (option.value.toLowerCase().startsWith(searchLower)) {
      return true;
    } else if (option.subs) {
      return option.subs.some(({ value }) =>
        value.toLowerCase().startsWith(searchLower)
      );
    }

    return false;
  };

  const renderOption = (
    test: keyof LanguagePair,
    option: (typeof languagesOptions)[number],
    index?: number,
    _?: typeof languagesOptions
  ) => {
    if (typeof option === "string")
      return (
        <Text
          key={option}
          variant="Paragraph/Paragraph-2"
          className="text-[#999] text-center"
        >
          {option}
        </Text>
      );

    return (
      <div key={option.value + index}>
        <div
          className={cn(
            "p-[5px_10px] cursor-pointer rounded-[6px] grid grid-flow-col justify-start gap-2.5 items-center transition-colors hover:bg-[#FFF5F0] hover:text-da5001",
            option.value === languagesState?.[test] &&
              "bg-[#ddd] hover:bg-[#FFF5F0] hover:text-da5001"
          )}
          onClick={() =>
            setLanguagesState((prev) => ({ ...prev, [test]: option.value }))
          }
        >
          <Image
            src={findFlagUrlByIso2Code(option.flag) || euFlagPlaceholder}
            alt={`${option.value} flag`}
            width="0"
            height="0"
            className="w-[16px] h-auto"
          />
          <Text variant="Paragraph/Paragraph-2" className="text-inherit">
            {option.value}
          </Text>
        </div>
        {option.subs?.map(({ value, flag }, index) => {
          return (
            <div
              key={value + index}
              className={cn(
                "p-[5px_10px_5px_30px] cursor-pointer rounded-[6px] grid grid-flow-col justify-start gap-2.5 items-center transition-colors hover:bg-[#FFF5F0] hover:text-da5001",
                value === languagesState?.[test] &&
                  "bg-[#ddd] hover:bg-[#FFF5F0] hover:text-da5001"
              )}
              onClick={() =>
                setLanguagesState((prev) => ({ ...prev, [test]: value }))
              }
            >
              <Image
                src={findFlagUrlByIso2Code(flag) || euFlagPlaceholder}
                alt={`${value} flag`}
                width="0"
                height="0"
                className="w-[16px] h-auto"
              />
              <Text variant="Paragraph/Paragraph-2" className="text-inherit">
                {value}
              </Text>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      {...storyblokEditable(blok)}
      className="px-16 py-10 bg-ffffff rounded-[24px] grid gap-10"
    >
      <Text
        as="h3"
        variant="Heading/Heading-3"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid gap-[37px] grid-cols-[auto_1fr] items-center">
        <Image
          priority
          alt={image.alt ?? "languages"}
          src={image.filename}
          width={355}
          height={320}
        />
        <div className="grid gap-8">
          <div className="grid gap-4">
            <Text
              variant="Paragraph/Paragraph-1"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="grid grid-cols-[1fr_auto_1fr] gap-[13px]">
              <Select
                value={languagesState?.first}
                options={languagesOptions}
                filterer={filterOptions}
                renderer={(...rest) => renderOption("first", ...rest)}
              />
              <button
                onClick={handleSwap}
                className="p-4 bg-f6f6f6 hover:bg-[#fff5f0] rounded-[6px] transition-all"
              >
                <ArrowSwapIcon />
              </button>
              <Select
                value={languagesState?.second}
                options={languagesOptions}
                filterer={filterOptions}
                renderer={(...rest) => renderOption("second", ...rest)}
              />
            </div>
            {areBothLanguagesSelected && (
              <Text variant="Heading/Heading-5" className="text-589999">
                {languagesState.first === languagesState.second
                  ? same_language
                  : successWithValues}
              </Text>
            )}
          </div>
          {areBothLanguagesSelected && (
            <div className="grid grid-flow-col auto-cols-[175px] gap-4">
              <Link href={main_button.url}>
                <Button>{main_button.title}</Button>
              </Link>
              <Link href={secondary_button.url}>
                <Button variant="outlined">{secondary_button.title}</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
