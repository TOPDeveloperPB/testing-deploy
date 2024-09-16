import * as React from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronUp, ChevronDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import logo from "./../../../public/images/logomain.svg";
import usflag from "./../../../public/images/us-flag.svg";
import ukflag from "./../../../public/images/uk-flag.svg";
import Link from "next/link";

export function MobileNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState("United States");
  const [selectedLogin, setSelectedLogin] = React.useState("KoT CloudTMS");
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);
  const [showCountryDropdown, setShowCountryDropdown] = React.useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = React.useState(false);
  
  const navItems = [
    {
      name: "Services",
      href: "/",
      subItems: [
        { name: "Business translation services", href: "/" },
        { name: "Certified document translation", href: "/" },
        { name: "Localization", href: "/" },
        { name: "Certification & legalization", href: "/" },
        { name: "Interpreting", href: "/" },
        { name: "Audio - Visual", href: "/" },
        { name: "Translation solutions", href: "/" },
        { name: "DTP translation services", href: "/" },
      ],
    },
    {
      name: "Solutions",
      href: "/",
      subItems: [
        { name: "Integration (API)", href: "/" },
        { name: "Translation memory", href: "/" },
        { name: "Translation management system", href: "/" },
        { name: "Optimization", href: "/" },
      ],
    },
    {
      name: "Industries",
      href: "/",
      subItems: [
        { name: "Legal", href: "/" },
        { name: "Financial", href: "/" },
        { name: "Manufacturing & engineering", href: "/" },
        { name: "IT & software", href: "/" },
        { name: "Medical", href: "/" },
        { name: "Blockchain & crypto", href: "/" },
        { name: "Government", href: "/" },
        { name: "Mobile & video games", href: "/" },
        { name: "Marketing & advertising", href: "/" },
        { name: "Retail & e-commerce", href: "/" },
        { name: "Tourism", href: "/" },
        { name: "Online Gambling", href: "/" },
        { name: "Media & Publishing", href: "/" },
        { name: "Scientific", href: "/" },
        { name: "Life Science", href: "/" },
      ],
    },
    { name: "Pricing", href: "/" },
    {
      name: "Company",
      href: "/",
      subItems: [
        { name: "About Us", href: "/" },
        { name: "Languages", href: "/" },
        { name: "Reviews", href: "/" },
        { name: "Prices", href: "/" },
        { name: "Quality", href: "/" },
        { name: "FAQ", href: "/" },
        { name: "News", href: "/" },
        { name: "Career Opportunities", href: "/" },
        { name: "Customers", href: "/" },
      ],
    },
    { name: "Contacts", href: "/" },
  ];

  const countries = [
    { name: "United States", flag: usflag },
    { name: "United Kingdom", flag: ukflag }
  ];

  const handleCountryChange = (value: string) => {
    if (value === "United States") {
      window.location.href = "/"; 
    } else if (value === "United Kingdom") {
      window.location.href = "/"; 
    }
    setSelectedCountry(value);
    setShowCountryDropdown(false);
  };

  const handleLoginChange = (login: string) => {
    if (login === "KoT CloudTMS") {
      window.location.href = "https://cloud.kingsoftranslation.com/login";
    } else if (login === "InterpretersPortal") {
      window.location.href = "https://kingsoftranslation.interpretmanager.com/";
    }
    setSelectedLogin(login); 
    setShowLoginDropdown(false); 
  };

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const toggleCountryDropdown = () => {
    setShowCountryDropdown(!showCountryDropdown);
    if (showLoginDropdown) setShowLoginDropdown(false);
  };

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
    if (showCountryDropdown) setShowCountryDropdown(false);
  };

  return (
    <div className="relative z-50 bg-muted px-4">
      <div className="flex justify-between items-center h-[60px] bg-muted xl:hidden">
        <Image src={logo} alt="Logo" className="w-32" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-secondary"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full px-4 h-screen bg-muted transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="sticky top-0 left-0 right-0 bg-muted pt-5 pb-8 flex justify-between items-center">
          <Image src={logo} alt="Logo" className="w-32" />
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="mb-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  className={`flex items-center text-base text-[#121212] ${
                    item.subItems ? "cursor-pointer" : ""
                  } ${openSubMenu === item.name ? "font-bold" : "font-normal"}`}
                  onClick={
                    item.subItems
                      ? (e) => {
                          e.preventDefault();
                          toggleSubMenu(item.name);
                        }
                      : undefined
                  }
                >
                  {item.name}
                  {item.subItems && (
                    <span className="ml-2">
                      {openSubMenu === item.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  )}
                </a>
                {item.subItems && openSubMenu === item.name && (
                  <ul className="flex flex-col">
                    {item.subItems.map((subItem) => (
                      <li className="mb-1" key={subItem.name}>
                        <a
                          href={subItem.href}
                          className="text-[13px] font-medium"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-normal Airbnb-normal mb-2">
            Talk to an expert:{" "}
            <span className="text-secondary">(844) 932 2984</span>
          </p>
          <p className="text-sm font-normal Airbnb-normal">Support</p>
        </div>
        <div className="mb-10 -mx-2">
          <div className={`rounded-md text-base font-normal ${showCountryDropdown ? "bg-white mr-3" : ""}`}>
            <div className="relative w-full px-2 py-2 z-10">
              <div
                onClick={toggleCountryDropdown}
                className="pl-0 w-full flex gap-3 items-center cursor-pointer text-sm"
              >
                <Image 
                  className="w-5" 
                  src={countries.find(c => c.name === selectedCountry)?.flag || usflag} 
                  alt={selectedCountry}
                />
                <p>{selectedCountry}</p>
                <ChevronDownIcon
                  className={`h-6 w-6 transform transition-transform duration-200 ${
                    showCountryDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>

              {showCountryDropdown && (
                <div className="absolute mt-3 px-2 left-0 w-full bg-white">
                  {countries.map((country) => (
                    <div
                      key={country.name}
                      onClick={() => handleCountryChange(country.name)}
                      className={`px-1.5 py-1 mb-1.5 rounded-md cursor-pointer flex text-sm gap-2 ${
                        selectedCountry === country.name
                          ? "bg-[#fff5f0]"
                          : "bg-gray-100 hover:bg-[#fff5f0]"
                      }`}
                    >
                      <Image className="w-5" src={country.flag} alt={country.name}/>
                      {country.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className={`text-base font-normal rounded-md ${showLoginDropdown ? "bg-white mr-3" : ""}`}>
              <div className="relative w-full p-2">
                <div
                  onClick={toggleLoginDropdown}
                  className="pl-0 w-full flex gap-3 items-center cursor-pointer text-sm"
                >
                  <p>{selectedLogin || "Select Login"}</p>
                  <ChevronDownIcon
                    className={`h-6 w-6 transform transition-transform duration-200 ${
                      showLoginDropdown ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {showLoginDropdown && (
                  <div className="absolute left-0 w-full bg-white px-2">
                    {["Login", "KoT CloudTMS", "InterpretersPortal"].map(
                      (login) => (
                        <div
                          key={login}
                          onClick={() => handleLoginChange(login)}
                          className={`px-1.5 py-1 my-1.5 rounded-md cursor-pointer text-sm ${
                            selectedLogin === login
                              ? "bg-[#fff5f0]"
                              : "bg-gray-100 hover:bg-[#fff5f0]"
                          }`}
                        >
                          {login}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4 mt-auto">
          <Button variant="primary" size="lg">
            Order Now
          </Button>
          <Button variant="outline" size="md">
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}