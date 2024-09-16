"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import AtaLogo from "./../../../public/images/partner1.png";
import usflag from "./../../../public/images/us-flag.svg";
import ukflag from "./../../../public/images/uk-flag.svg";
import lithauniaflag from "./../../../public/images/litahunia-flag.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from "@/components/ui/select";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const countries = [
  {
    link: "https://kingsoftranslation.com/",
    code: "US",
    name: "United States",
    flag: "/images/us-flag.svg",
  },
  {
    link: "https://kingsoftranslation.co.uk",
    code: "GB",
    name: "United Kingdom",
    flag: "/images/uk-flag.svg",
  },
  // { code: "LT", name: "Lithuania", flag: "/images/litahunia-flag.svg" },
];

const FlagImage = ({ src, alt }: any) => (
  <Image src={src} alt={alt} width={21} height={21} />
);

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      //@ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer className="bg-[#F1EEE9] text-[#333] pt-8 sm:pt-14 pb-9">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex lg:flex-row flex-col justify-center lg:justify-between gap-11 text-center lg:text-start">
          <div>
            <h3 className="text-secondary text-sm font-bold mb-4">SERVICES</h3>
            <ul className="space-y-3.5 text-sm font-normal text-primary">
              <li>Business translation services</li>
              <li>Certified document translation</li>
              <li>Localization</li>
              <li>Certification & Legalization</li>
              <li>Interpreting</li>
              <li>Audio - Visual</li>
              <li>Translation solutions</li>
              <li>DTP translation services</li>
            </ul>
          </div>
          <div className="ml-2.5">
            <div>
              <h3 className="text-secondary text-sm font-bold mb-4">
                SOLUTIONS
              </h3>
              <ul className="space-y-3.5 text-sm font-normal text-primary">
                <li>By language</li>
                <li>By document</li>
                <li>By industry</li>
              </ul>
            </div>
          </div>
          <div className="ml-3">
            <div>
              <h3 className="text-secondary text-sm font-bold mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-3.5 text-sm font-normal text-primary">
                <li>Integration (API)</li>
                <li>Translation memory</li>
                <li>Career opportunities</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-secondary text-sm font-bold mb-4">COMPANY</h3>
              <ul className="space-y-3.5 text-sm font-normal text-primary">
                <li>About KOT</li>
                <li>Career</li>
                <li>Affiliate program</li>
                <li>Reviews</li>
                <li>News & Insights</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start w-full max-w-[100%] md:max-w-[216px]">
            <h3 className="text-secondary text-sm font-bold mb-5">
              LOGIN TO {"KOT CLOUD"}
            </h3>
            <Button className="mb-10 w-[214px] h-[50px]" variant="primary">
              Login
            </Button>
            <div className="w-full items-center bg-[#fff5f0] px-4 py-2 rounded-xl">
              <div className="justify-center  flex mb-1">
                <Image
                  src={AtaLogo}
                  alt="ATA Logo"
                  className="h-20 sm:h-full  w-40 sm:w-full mr-4 "
                />
              </div>
              <div>
                <p className="text-base text-center font-normal text-primary">
                  ATA Corporate member
                </p>
                <p className="text-base text-center font-normal text-primary">
                  #275946 since 2016
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 border-y border-[#E1DED9] pt-12 sm:pt-6 pb-6">
          <div className="text-center md:text-start">
            <h3 className="text-secondary text-xl font-bold mb-4">
              FEW CLICKS TO ORDER TRANSLATIONS
            </h3>
            <div className="flex md:flex-row flex-col gap-3 sm:gap-4 justify-center md:justify-start ">
              <Button variant="primary" size="md">
                Order Translation
              </Button>
              <Button variant="outline" size="md">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center border-b border-[#E1DED9] pb-6 sm:pb-10 pt-7 sm:pt-10 mb-5 sm:mb-7">
          <div className="flex md:flex-row flex-col gap-0 sm:gap-6">
            <h3 className="font-bold text-xl text-primary md:text-left text-center">
              HOW CAN WE HELP?
            </h3>
            <div className="">
              <p className="text-secondary text-center sm:text-start text-xl font-bold mb-2 sm:mb-1">
                1-646-876-5461
              </p>
              <p className="text-lg text-pretty font-normal mb-2 md:mb-0">
                info@kingsoftranslation.com
              </p>
            </div>
          </div>
          <div className="relative min-w-[216px]" ref={dropdownRef}>
            <button
              className={`${
                isOpen ? "rounded-b-[8px]" : "bg-[#F2EEEA] rounded-full"
              } flex items-center justify-between w-full px-5 py-3 focus:outline-none duration-100 transition-colors bg-white`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="flex items-center gap-2">
                <FlagImage
                  src={selectedCountry.flag}
                  alt={`${selectedCountry.name} flag`}
                />
                <span className="text-[16px]">{selectedCountry.name}</span>
              </span>
              {isOpen ? (
                <ChevronUp className="w-5 text-[#1D1C19] font-light" />
              ) : (
                <ChevronDown className="w-5 text-[#1D1C19] font-light" />
              )}
            </button>
            <ul
              className={`absolute z-[9999] bottom-full left-0 w-full pt-2 px-1 bg-white rounded-t-xl max-h-60 overflow-auto transition-all duration-100 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-0 pointer-events-none"
              }`}
            >
              {countries.map((country) => (
                <li
                  key={country.code}
                  className="px-2 py-3 m-1.5 bg-[#F6F6F6] hover:bg-[#FFF5F0] cursor-pointer transition-colors  duration-100 rounded-md mx-3 hover:shadow-sm"
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <FlagImage
                      src={country.flag}
                      alt={`${country.name} flag`}
                    />
                    <span className="text-sm">{country.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center ">
          <p className="text-sm font-normal text-primary">
            All rights reserved © 2024 Kings of Translation, Inc.
          </p>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-3 sm:gap-6 mt-2">
            <Link
              href="#"
              className="text-sm font-normal text-primary underline"
              prefetch={false}
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-sm font-normal text-primary underline"
              prefetch={false}
            >
              Privacy Policy & GDPR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
