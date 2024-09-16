"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import logo from "./../../../public/images/logomain.svg";

// Services Images

import businesstranslation from "./../../../public/images/Business-Translation.svg";
import cdt from "./../../../public/images/Certified-Document-Translation.svg";
import localization from "./../../../public/images/Localization.svg";
import legalisation from "./../../../public/images/Certification-Legalisation.svg";
import interprating from "./../../../public/images/Interpreting.svg";
import patent from "./../../../public/images/Patent-Translation.svg";
import audiovisuals from "./../../../public/images/Audio-Visual.svg";
import dtp from "./../../../public/images/DTP-translation-services.svg";

// Solution Images

import integrationapi from "./../../../public/images/Integration-(API).svg";
import transmemory from "./../../../public/images/Translation-Memory.svg";
import translationmanagement from "./../../../public/images/Translation-management-system.svg";
import optimization from "./../../../public/images/Optimization.svg";

// Industries Images

import Legal from "./../../../public/images/Legal.svg";
import Financial from "./../../../public/images/Financial.svg";
import ManufacturingEngineering from "./../../../public/images/Manufacturing-Engineering.svg";
import ITSoftware from "./../../../public/images/IT-Software.svg";
import Medical from "./../../../public/images/Medical.svg";
import Government from "./../../../public/images/Government.svg";
import MobileVideoGames from "./../../../public/images/Mobile-Video-Games.svg";
import MarketingAdvertising from "./../../../public/images/Marketing-Advertising.svg";
import RetailEcommerce from "./../../../public/images/Retail-Ecommerce.svg";
import Tourism from "./../../../public/images/Tourism.svg";
import OnlineGambling from "./../../../public/images/Online-Gambling.svg";
import MediaPublishing from "./../../../public/images/Media-Publishing.svg";
import Scientific from "./../../../public/images/Scientific.svg";
import LifeScience from "./../../../public/images/Life-Science.svg";

// Industries Images

import about from "./../../../public/images/about.svg";
import Languages from "./../../../public/images/Languages.svg";
import Reviews from "./../../../public/images/Reviews.svg";
import Prices from "./../../../public/images/Prices.svg";
import Quality from "./../../../public/images/Quality.svg";
import FAQ from "./../../../public/images/FAQ.svg";
import News from "./../../../public/images/News.svg";
import career from "./../../../public/images/career.svg";
import Customers from "./../../../public/images/Customers.svg";

import { Button } from "../ui/button";
import { MobileNavbar } from "./mobilenavbar";

interface NavItemProps {
  label: string;
  items: Array<{
    src: string;
    alt: string;
    description: string;
    text: string;
  }>;
  isSticky: boolean;
  activeDropdown: string | null;
  onMouseEnter: (dropdown: string) => void; // Updated
  onMouseLeave: () => void;
  hoveredDropdown: string | null;
}

interface DropdownContentProps {
  items: Array<{
    src: string;
    alt: string;
    description: string;
    text: string;
  }>;
  isActive: boolean;
  isSticky: boolean;
  dropdownType: string;
  isHovered: boolean;
}

interface ListItemProps {
  src: string;
  alt: string;
  text: string;
  description: string;
  backgroundColor: string;
  isSticky: boolean;
}

const expertiseItems = [
  {
    src: businesstranslation,
    alt: "Business Document Translation",
    description: "Precision translation for your company",
    text: "Business Document Translation",
  },
  {
    src: cdt,
    alt: "Certified Document Translation",
    description: "Official translations for all.",
    text: "Certified Document Translation",
  },
  {
    src: localization,
    alt: "Localization",
    description: "Transform your global presence.",
    text: "Localization",
  },
  {
    src: legalisation,
    alt: "Certification & Legalisation",
    description: "Apostille services made easy.",
    text: "Certification & Legalisation",
  },
  {
    src: interprating,
    alt: "Interpreting",
    description: "On-demand language interpretation.",
    text: "Interpreting",
  },
  {
    src: patent,
    alt: "Patent Translation",
    description: "Secure your intellectual property.",
    text: "Patent Translation",
  },
  {
    src: audiovisuals,
    alt: "Mobile & Video games",
    description: "Engage with polished A/V.",
    text: "Audio - Visuals",
  },
  {
    src: dtp,
    alt: "DTP Translation Services",
    description: "Perfect layout for every language.",
    text: "DTP Translation Services",
  },
];

const solutionsItems = [
  {
    src: integrationapi,
    alt: "Integration (API)",
    description: "Translation Management System (TMS) integration to your CMS.",
    text: "Integration (API)",
  },
  {
    src: transmemory,
    alt: "Translation memory",
    description: "Take advantage of Translation Memory (TM).",
    text: "Translation memory",
  },
  {
    src: translationmanagement,
    alt: "Translation management system",
    description:
      "Smart Translation Management (TMS) allows you to automate the translation process at various stages.",
    text: "Translation management system",
  },
  {
    src: optimization,
    alt: "Optimization",
    description:
      "Tool which allow you to monitor and comment on translations in one of the most advanced CAT tools in the world.",
    text: "Optimization",
  },
];
const industriesItems = [
  {
    src: Legal,
    alt: "Legal",
    description: "",
    text: "Legal",
  },
  {
    src: Financial,
    alt: "Financial",
    description: "",
    text: "Financial",
  },
  {
    src: ManufacturingEngineering,
    alt: "Manufacturing & Engineering",
    description: "",
    text: "Manufacturing & Engineering",
  },
  {
    src: ITSoftware,
    alt: "IT & Software",
    description: "",
    text: "IT & Software",
  },
  {
    src: Medical,
    alt: "Medical",
    description: "",
    text: "Medical",
  },
  {
    src: Government,
    alt: "Government",
    description: "",
    text: "Government",
  },
  {
    src: MobileVideoGames,
    alt: "Mobile & Video games",
    description: "",
    text: "Mobile & Video games",
  },
  {
    src: MarketingAdvertising,
    alt: "Marketing & Advertising",
    description: "",
    text: "Marketing & Advertising",
  },
  {
    src: RetailEcommerce,
    alt: "Retail & E-commerce",
    description: "",
    text: "Retail & E-commerce",
  },
  {
    src: Tourism,
    alt: "Tourism",
    description: "",
    text: "Tourism",
  },
  {
    src: OnlineGambling,
    alt: "Online Gambling",
    description: "",
    text: "Mobile & Video games",
  },
  {
    src: MediaPublishing,
    alt: "Media & Publishing",
    description: "",
    text: "Media & Publishing",
  },

  {
    src: Scientific,
    alt: "Scientifc",
    description: "",
    text: "Scientifc",
  },
  {
    src: LifeScience,
    alt: "Life Science",
    description: "",
    text: "Life Science",
  },
];

const companyItems = [
  {
    src: about,
    alt: "About Us",
    description: "",
    text: "About Us",
  },
  {
    src: Languages,
    alt: "Languages",
    description: "",
    text: "Languages",
  },
  {
    src: Reviews,
    alt: "Reviews",
    description: "",
    text: "Reviews",
  },
  {
    src: Prices,
    alt: "Prices",
    description: "",
    text: "Prices",
  },
  {
    src: Quality,
    alt: "Quality",
    description: "",
    text: "Quality",
  },
  {
    src: FAQ,
    alt: "FAQ",
    description: "",
    text: "FAQ",
  },
  {
    src: News,
    alt: "News",
    description: "",
    text: "News",
  },
  {
    src: career,
    alt: "Career Opportunities",
    description: "",
    text: "Career Opportunities",
  },
  {
    src: Customers,
    alt: "Customers",
    description: "",
    text: "Customers",
  },
];

const getBackgroundColor = (index: number) => {
  if (index === 0) return "bg-[#FFDBDB] group-hover:bg-[#fff]";
  if (index === 1) return "bg-[#DBFFE0] group-hover:bg-[#fff]";
  if (index === 2) return "bg-[#FFEEDB] group-hover:bg-[#fff]";
  if (index === 3) return "bg-[#DBFFF8] group-hover:bg-[#fff]";
  if (index === 4) return "bg-[#FFF7DB] group-hover:bg-[#fff]";
  if (index === 5) return "bg-[#DBF4FF] group-hover:bg-[#fff]";
  if (index === 6) return "bg-[#EDFFDB] group-hover:bg-[#fff]";
  if (index === 7) return "bg-[#DBE3FF] group-hover:bg-[#fff]";
  if (index === 8) return "bg-[#FADBFF] group-hover:bg-[#fff]";
  if (index === 9) return "bg-[#F8CFD9] group-hover:bg-[#fff]";
  if (index === 10) return "bg-[#FFDBDB] group-hover:bg-[#fff]";
  if (index === 11) return "bg-[#DBFFE0] group-hover:bg-[#fff]";
  if (index === 12) return "bg-[#FFEEDB] group-hover:bg-[#fff]";
  if (index === 13) return "bg-[#DBFFF8] group-hover:bg-[#fff]";
  if (index === 14) return "bg-[#DBF4FF] group-hover:bg-[#fff]";
  return "bg-[#EEE5FF] group-hover:bg-[#fff]";
};

export function Navbar() {
  const [hoveredDropdown, setHoveredDropdown] = React.useState<string | null>(
    null
  );
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  );
  const [hoverTimeout, setHoverTimeout] = React.useState<NodeJS.Timeout | null>(
    null
  );
  const [isSticky, setIsSticky] = React.useState(false);
  const navbarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const { top } = navbarRef.current.getBoundingClientRect();
        setIsSticky(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredDropdown(dropdown);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 50);
    setHoverTimeout(timeout);
  };
  return (
    <div ref={navbarRef} className="sticky top-0 left-0 right-0 z-50">
      <div className="hidden xl:flex justify-between items-center px-10 py-4 bg-white">
        <div className="flex items-center gap-5">
          <Image src={logo} alt="" className="w-[230px] mb-2" />
          <nav className="flex gap-1.5">
            <NavItem
              label="Services"
              items={expertiseItems}
              activeDropdown={activeDropdown}
              hoveredDropdown={hoveredDropdown}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              isSticky={isSticky}
            />
            <NavItem
              label="Solutions"
              items={solutionsItems}
              activeDropdown={activeDropdown}
              hoveredDropdown={hoveredDropdown}
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
              isSticky={isSticky}
            />

            <NavItem
              label="Industries"
              items={industriesItems}
              activeDropdown={activeDropdown}
              hoveredDropdown={hoveredDropdown}
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
              isSticky={isSticky}
            />
            <Link
              href="/plans-pricing"
              className="px-3 py-2 hover:text-[#da5001] hover:bg-[#F6F5F1] rounded-full transition-colors duration-200"
            >
              Pricing
            </Link>
            <NavItem
              label="Company"
              items={companyItems}
              activeDropdown={activeDropdown}
              hoveredDropdown={hoveredDropdown}
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
              isSticky={isSticky}
            />
            <Link
              href="/plans-pricing"
              className="px-3 py-2 hover:text-[#da5001] hover:bg-[#F6F5F1] rounded-full  transition-colors duration-200"
            >
              Contacts
            </Link>
          </nav>
        </div>
        <div className="flex gap-3.5">
          <Button variant="primary" size="lg" className="rounded-full">
            Order Now
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Request a Quote
          </Button>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  items,
  activeDropdown,
  hoveredDropdown,
  onMouseEnter,
  onMouseLeave,
  isSticky,
}) => {
  const isActive = activeDropdown === label.toLowerCase();
  const isHovered = hoveredDropdown === label.toLowerCase();
  const shouldRotate = isActive || isHovered;

  return (
    <div
      className="relative"
      onMouseEnter={() => onMouseEnter(label.toLowerCase())}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`px-3 py-2 hover:text-[#DA5001] text-base font-normal transition-colors duration-200 flex items-center rounded-full ${
          isActive || isHovered ? "text-[#DA5001] bg-[#F6F5F1]" : ""
        }`}
      >
        {label}
        <ChevronDown
          className={`ml-1 w-6 h-6 transition-transform duration-200 ${
            shouldRotate ? "rotate-180 text-[#DA5001]" : "text-[#1D1C19]"
          }`}
        />
      </button>
      <div className="absolute w-full h-5 bottom-0 left-0 translate-y-full" />
      <DropdownContent
        items={items}
        isActive={isActive}
        isHovered={isHovered}
        isSticky={isSticky}
        dropdownType={label.toLowerCase()}
      />
    </div>
  );
};

const DropdownContent: React.FC<DropdownContentProps> = ({
  items,
  isActive,
  isHovered,
  isSticky,
  dropdownType,
}) => {
  const leftPosition = dropdownType === "company" ? "-left-[184px]" : "left-0";
  return (
    <div
      className={`absolute ${leftPosition} ${
        isSticky ? "top-[calc(100%+5px)]" : "top-[calc(100%+25px)]"
      } bg-white shadow-2xl overflow-hidden transition-all duration-300 ease-in-out rounded-3xl ${
        isActive || isHovered
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-[-20px] pointer-events-none"
      }`}
      style={{ minWidth: "856px" }}
    >
      <div className="max-w-[856px]">
        <ul className="grid gap-3 p-4 md:grid-cols-2">
          {items.map((item, index) => (
            <ListItem
              key={index}
              src={item.src}
              alt={item.alt}
              text={item.text}
              description={item.description}
              backgroundColor={getBackgroundColor(index)}
              isSticky={isSticky}
            />
          ))}
        </ul>
        <div className="rounded-b-2xl bg-[#FFF4F0] flex justify-between items-center py-8 px-8">
          <div className="max-w-lg">
            <h4 className="text-secondary text-xl font-bold mb-1">Pricing</h4>
            <p className="text-[#7E7E7E] text-sm">
              Discover our flexible, competitive pricing for all your
              translation needs.
            </p>
          </div>
          <Button
            variant="primary"
            size="sm"
            className="w-[140px] rounded-full"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

const ListItem: React.FC<ListItemProps> = ({
  src,
  alt,
  text,
  description,
  backgroundColor,
}) => {
  return (
    <li className="flex items-center p-3 rounded-2xl transition-colors duration-200 ease-in-out hover:bg-[#fff5f0] bg-white relative group">
      <div
        className={`p-3 rounded-lg transition-colors duration-300 ease-in-out w-[48px] h-[48px] ${backgroundColor}`}
      >
        <Image src={src} alt={alt} width={36} height={36} />
      </div>
      <div className="ml-4 flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-bold">{text}</h3>
          <ArrowRight
            className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            size={22}
          />
        </div>
        <p className="text-sm text-[#7E7E7E] font-normal">{description}</p>
      </div>
    </li>
  );
};
