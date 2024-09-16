'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { SbBlokData } from "@storyblok/react/rsc";

interface TeamProps {
  blok: {
    title: string
    logos: SbBlokData[];
  };
}

const TrustedBrands = ({ blok }: TeamProps) => {
  const [logos, setLogos] = useState<SbBlokData[]>([]);

  useEffect(() => {
    const duplicateCount = Math.min(blok.logos.length, 16); // Duplicate up to 16 logos
    setLogos([...blok.logos, ...blok.logos.slice(0, duplicateCount)]);
  }, [blok.logos]);

  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-8 mb-12 md:mb-24 max-w-[1440px] mx-auto">
      <h2 className="text-center md:text-lg font-normal text-primary mb-4 leading-9">
        {blok.title}
      </h2>
      <div className="mt-8 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FBFBFB] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FBFBFB] to-transparent z-10"></div>
        <Slider {...settings}>
          {logos.map((item: any, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-2"
            >
              <div className="w-[100px] h-[30px] relative">
                <Image
                  src={item.filename}
                  alt={item.alt}
                  layout="fill"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrustedBrands;