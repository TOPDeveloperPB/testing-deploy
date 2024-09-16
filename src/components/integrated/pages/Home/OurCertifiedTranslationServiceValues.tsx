"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Text } from "@/components/core";
import { IStoryBlokComponent } from "@/types";
import { ArrowDropDownIcon } from "@/public/icons";
import { storyblokEditable } from "@storyblok/react";

interface IValueSB extends IStoryBlokComponent {
  title: string;
  component: string;
  description: string;
}

export function OurCertifiedTranslationServiceValues({ blok }: any) {
  const {
    title,
    paragraph_first,
    paragraph_second,
    paragraph_third,
    remark,
    values_title,
    values,
  } = blok;

  const [expandedValueId, setExpandedValueId] = useState<string | undefined>(
    (values as IValueSB[]).at(0)?._uid
  );

  return (
    <div {...storyblokEditable(blok)} className="grid gap-6">
      <Text
        as="h2"
        variant="Heading/Heading-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid grid-cols-[644px_auto] gap-6">
        <div className="grid bg-ffffff rounded-[16px] p-6 gap-4 h-fit">
          <Text
            variant="Paragraph/Paragraph-2"
            dangerouslySetInnerHTML={{ __html: paragraph_first }}
          />
          <Text
            variant="Paragraph/Paragraph-2"
            dangerouslySetInnerHTML={{ __html: paragraph_second }}
          />
          <Text
            variant="Paragraph/Paragraph-2"
            dangerouslySetInnerHTML={{ __html: paragraph_third }}
          />
          <Text
            variant="Heading/Heading-5"
            dangerouslySetInnerHTML={{ __html: remark }}
          />
        </div>
        <div className="grid gap-4 content-start">
          <Text
            as="h4"
            variant="Heading/Heading-4"
            dangerouslySetInnerHTML={{ __html: values_title }}
          />
          {(values as IValueSB[]).map(({ title, description, _uid }, index) => {
            const isExpanded = _uid === expandedValueId;
            const handleExpand = () =>
              isExpanded
                ? setExpandedValueId(undefined)
                : setExpandedValueId(_uid);

            return (
              <div
                key={_uid}
                onClick={handleExpand}
                className={cn(
                  "grid gap-0 grid-rows-[auto_0fr] bg-f6f6f6 cursor-pointer p-6 transition-all rounded-[16px]",
                  isExpanded && "bg-[#fff5f0] gap-4 grid-rows-[auto_1fr]"
                )}
              >
                <div className={cn("grid gap-2 grid-cols-[auto_1fr]")}>
                  <div
                    className={cn(
                      "transition-colors w-6 aspect-square text-center bg-[#121212] text-ffffff rounded-full",
                      isExpanded && "bg-da5001"
                    )}
                  >
                    {index + 1}
                  </div>
                  <Text
                    variant="Heading/Heading-5"
                    className={cn(
                      "transition-colors grid grid-flow-col justify-between",
                      isExpanded && "text-da5001"
                    )}
                  >
                    {title}
                    <ArrowDropDownIcon
                      className={cn(
                        " transition-transform",
                        isExpanded && "-scale-100"
                      )}
                    />
                  </Text>
                </div>
                <Text
                  className=" overflow-hidden"
                  variant="Paragraph/Paragraph-2"
                >
                  {description}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
