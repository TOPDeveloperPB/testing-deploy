import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const countries = [
  { link: "/", code: "US", name: "United States", flag: "/images/us-flag.svg" },
  { link: "/", code: "GB", name: "United Kingdom", flag: "/images/uk-flag.svg" },
  // { code: "LT", name: "Lithuania", flag: "/images/litahunia-flag.svg" },
];

const FlagImage = ({ src, alt }:any) => (
  <Image src={src} alt={alt} width={21} height={21} />
);

export default function CountrySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any; }) {
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
    <div className="relative min-w-[173px] z-[9999]" ref={dropdownRef}>
      <button
        className={`${
          isOpen ? "bg-white shadow-sm rounded-t-[8px]" : "bg-[#F2EEEA] rounded-t-[8px]"
        } flex items-center justify-between w-full px-3 py-2 focus:outline-none transition-colors duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          <FlagImage
            src={selectedCountry.flag}
            alt={`${selectedCountry.name} flag`}
          />
          <span className="text-[14px]">{selectedCountry.name}</span>
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 text-[#1D1C19] font-light" />
        ) : (
          <ChevronDown className="w-5 text-[#1D1C19] font-light" />
        )}
      </button>

      <ul
        className={`absolute z-[9999] w-full bg-white rounded-b-[8px] shadow-lg max-h-60 overflow-auto transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-10px] pointer-events-none"
        }`}
      >
        {countries.map((country) => (
          <Link href={country.link}  key={country.code}>
          <li
           
            className="px-2 py-1 m-1.5 bg-[#F6F6F6] hover:bg-[#FFF5F0] cursor-pointer transition-colors duration-200 rounded-sm"
            onClick={() => {
              setSelectedCountry(country);
              setIsOpen(false);
            }}
          >
            <div className="flex items-center gap-2">
              <FlagImage src={country.flag} alt={`${country.name} flag`} />
              <span className="text-sm">{country.name}</span>
            </div>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}