"use client";
import CountrySelect from "../ui/country-select";
import Image from "next/image";
import searchicon from "../../../public/images/searchicon.svg";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Login = [
  {
    name: "KoT Cloud TMS",
    link: "https://cloud.kingsoftranslation.com/login?_gl=1*1po6hww*_gcl_au*MTY5MDQ5NTk2My4xNzIzNzg0NzUw*_ga*MTI2NTU3NjIzMy4xNzIzNzg0NzQ5*_ga_J5ZRQS0KY1*MTcyNTUyODI1Ny4xMC4xLjE3MjU1Mjg4NjguMTkuMC4w&_ga=2.200469287.886743143.1725447128-1265576233.1723784749",
  },
  {
    name: "Interpreters Portal",
    link: "https://kingsoftranslation.interpretmanager.com/",
  },
];

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLogin, setSelectedLogin] = useState(Login[0]);
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
    <div className="bg-[#F2EEEA] hidden lg:flex items-center justify-end py-3">
      <div className="flex items-center gap-5 mr-10">
        <p className="text-sm">
          Talk to an expert:{" "}
          <a href="tel:+16468765461" className="text-secondary">
            1-646-876-5461
          </a>
        </p>
        <CountrySelect />
        <p className="cursor-pointer text-sm">Support</p>
        <div className="relative" ref={dropdownRef}>
          <button
            className={`${
              isOpen
                ? "bg-white shadow-sm rounded-t-[8px]"
                : "bg-[#F2EEEA] rounded-t-[8px]"
            } flex items-center justify-between w-full px-3 py-2 focus:outline-none transition-colors duration-300`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              <span className="text-[14px]">Login</span>
            </span>
            {isOpen ? (
              <ChevronUp className="w-5 text-[#1D1C19] font-light ml-2" />
            ) : (
              <ChevronDown className="w-5 text-[#1D1C19] font-light ml-2" />
            )}
          </button>

          <ul
            className={`absolute z-[9999] min-w-[170px] bg-white rounded-b-[8px] rounded-l-[8px] -ml-[80px] shadow-lg max-h-60 overflow-auto transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-10px] pointer-events-none"
            }`}
          >
            {Login.map((login, index) => (
              <li
                key={index}
                className="px-2 py-1 m-1.5 bg-[#F6F6F6] hover:bg-[#FFF5F0] cursor-pointer transition-colors duration-200 text-sm rounded-sm"
              >
                <a
                  href={login.link}
                  onClick={() => {
                    setSelectedLogin(login);
                    setIsOpen(false);
                  }}
                  className="block"
                >
                  {login.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Image src={searchicon} alt="" className="ml-6" />
      </div>
    </div>
  );
};

export default TopBar;
