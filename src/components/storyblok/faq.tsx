import Image from "next/image";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { storyblokEditable } from "@storyblok/react/rsc";

interface FAQ {
  title: string;
  description: string;
}

interface FAQProps {
  blok: {
    title: string;
    description: string;
    image: {
      filename: string;
      alt: string;
    };
    faqs: FAQ[];
  };
}

export default function Faq({ blok }: FAQProps) {
  return (
    <div className="bg-muted pb-8 lg:pb-32" {...storyblokEditable(blok)}>
      <div className="max-w-6xl mx-auto px-4">
        <section className="flex lg:flex-row flex-col items-center justify-between w-full">
          <div className="max-w-3xl">
            <h2 className="text-[27px] md:text-[32px] lg:text-5xl text-primary font-bold mb-2 md:mb-7">
              {blok.title}
            </h2>
            <p className="text-base md:text-lg font-normal text-popover mb-4 sm:mb-6">
              {blok.description}
            </p>
            <Accordion
              type="single"
              collapsible
              className="space-y-4 sm:space-y-[26px]"
            >
              {blok?.faqs.map((faq, index) => {
                return (
                  <AccordionItem
                    key={index}
                    value={`v-${index}`}
                    className="bg-[#f0f7f7] px-7 rounded-lg"
                  >
                    <AccordionTrigger className="text-start font-bold text-base text-primary">
                      {faq?.title}
                    </AccordionTrigger>
                    <AccordionContent>{faq?.description}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div>
            <Image
              src={blok?.image?.filename}
              alt={blok?.image?.alt}
              width={330}
              height={330}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
