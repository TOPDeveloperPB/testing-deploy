"use client";
import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData,
} from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";
import Slider from "react-slick";
import { useCallback, useMemo } from "react";

// Define the interface for ProjectsShowcaseProps
interface ProjectsShowcaseProps {
  blok: {
    title: any; // Replace `any` with the appropriate type if you know the structure
    description: any; // Replace `any` with the appropriate type if you know the structure
    button?: SbBlokData[];
    logos?: {
      filename: string;
      alt: string;
    }[];
    image?: {
      filename: string;
      alt: string;
    };
    projects?: SbBlokData[];
  };
}

export default function ProjectsShowcase({ blok }: ProjectsShowcaseProps) {
  const settings = useMemo(() => ({
    infinite: true,
    speed: 3000, // Increased speed for smoother animation
    slidesToShow: 4,
    slidesToScroll: 1, // Changed to 1 for smoother scrolling
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }), []);

  const renderLogos = useCallback(() => {
    if (!blok.logos) return null;

    // Duplicate logos array for seamless looping
    const extendedLogos = [...blok.logos, ...blok.logos.slice(0, 4)];

    return extendedLogos.map((item: any, index) => (
      <div key={index} className="flex items-center justify-center px-2">
        <div className="w-[90px] h-[30px] relative">
          <Image
            src={item.filename}
            alt={item.alt}
            layout="fill"
            objectFit="contain"
            sizes="90px"
            quality={80}
            loading="lazy"
          />
        </div>
      </div>
    ));
  }, [blok.logos]);

  return (
    <div className="bg-muted pb-16 md:pb-24" {...storyblokEditable(blok)}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="p-5 md:p-12 bg-white rounded-xl md:rounded-[32px]">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-7 sm:mb-12">
              <div className="max-w-lg">
                <div className="text-[26px] md:text-[32px] font-bold text-primary mb-4 leading-9">
                  {render(blok.title)}
                </div>
                <div className="text-base md:text-lg font-normal text-popover mb-7 md:mb-11">
                  {render(blok.description)}
                </div>
                {blok.button?.map((nestedBlok) => (
                  <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
                <div className="mt-11 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10"></div>
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10"></div>
                  <Slider {...settings}>
                    {renderLogos()}
                  </Slider>
                </div>
              </div>
              <div>
                {blok.image && (
                  <Image
                    src={blok.image.filename}
                    alt={blok.image.alt}
                    width={500}
                    height={372}
                    className="rounded-lg"
                    loading="eager"
                    priority
                  />
                )}
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 sm:gap-6 justify-center">
              {blok.projects?.map((nestedBlok:any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
