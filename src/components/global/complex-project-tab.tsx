"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import service1 from "./../../../public/images/service1.png";
import service2 from "./../../../public/images/service2.png";
import service3 from "./../../../public/images/service3.png";
import service4 from "./../../../public/images/service4.png";
import service5 from "./../../../public/images/service5.png";
import service6 from "./../../../public/images/service6.png";
import service7 from "./../../../public/images/service7.png";
import service8 from "./../../../public/images/service8.png";
import { Cross } from "lucide-react";

export default function CheckboxCard() {
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const services = [
    {
      label: "Translation Services",
      icon: service1,
      tooltiptitle: "What's Available?",
      tooltipContent: [
        "Document Translation",
        "Website Translation",
        "More...",
      ],
    },
    {
      label: "Website / App / Software / Localization",
      icon: service2,
      tooltiptitle: "What's Available?",
      tooltipContent: ["App Localization", "Software Localization", "More..."],
    },
    {
      label: "Certification / Notarization / Apostille",
      icon: service3,
      tooltiptitle: "What's Included?",
      tooltipContent: ["Notarization", "Apostille Services", "More..."],
    },
    {
      label: "Interpreting",
      icon: service4,
      tooltiptitle: "What's Included",
      tooltipContent: [
        "On-site Interpreting",
        "Remote Interpreting",
        "More...",
      ],
    },
    {
      label: "Transcription",
      icon: service5,
      tooltiptitle: "What's Included",
      tooltipContent: ["Audio Transcription", "Video Transcription", "More..."],
    },
    {
      label: "Subtitling / Voiceover / Dubbing",
      icon: service6,
      tooltiptitle: "What's Included",
      tooltipContent: ["Subtitling", "Voiceover", "Dubbing", "More..."],
    },
    {
      label: "Technology solutions",
      icon: service7,
      tooltiptitle: "What's Included",
      tooltipContent: [
        "Language Technology",
        "Automation Solutions",
        "More...",
      ],
    },
    {
      label: "Other",
      icon: service8,
      tooltiptitle: "Have Something Else in Mind?",
      tooltipContent: ["Custom Solutions", "Consulting Services", "More..."],
    },
  ];
  const formFields = [
    { id: "name", placeholder: "Name", type: "text", required: true },
    { id: "company-name", placeholder: "Company name", type: "text" },
    { id: "email", placeholder: "Email", type: "email", required: true },
    { id: "phone", placeholder: "Phone", type: "tel" },
  ];
  const handleCardClick = (index: number) => {
    setSelectedServices((prevSelectedServices) => {
      const newSelectedServices = prevSelectedServices.includes(index)
        ? prevSelectedServices.filter((i) => i !== index)
        : [...prevSelectedServices, index];
      // Toggle the banner based on the selection of the "Certification / Notarization / Apostille" service (index 2)
      if (newSelectedServices.includes(2)) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
      return newSelectedServices;
    });
  };
  const handleBannerClose = () => {
    setShowBanner(false);
  };
  return (
    <div className="bg-muted pb-16">
      <div className="max-w-[962px] mx-auto bg-white px-5 py-14">
        <div className="">
          <h2 className="text-[26px] font-bold text-primary text-center mb-4">
            Which services are you interested in?
          </h2>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-5">
            {services.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 border-2 rounded-lg cursor-pointer ${
                  selectedServices.includes(index)
                    ? "bg-[#EDF5F5] border-[#579899]"
                    : "bg-white"
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className="grid grid-cols-3 items-center gap-3">
                  <div className="col-span-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            src={item.icon}
                            alt={item.label}
                            width={50}
                            height={50}
                            className="w-12 h-12 grayscale-0 hover:grayscale duration-200 rounded-full"
                          />
                        </TooltipTrigger>
                        <TooltipContent className="w-[360px] bg-white text-black p-4">
                          <p className="text-xl mb-4">{item.tooltiptitle}</p>
                          <ul className="list-disc ml-3">
                            {item.tooltipContent.map((content, idx) => (
                              <li key={idx}>{content}</li>
                            ))}
                          </ul>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <span className="col-span-2 text-[13px] text-primary font-normal w-full lg:max-w-[100px]">
                    {item.label}
                  </span>
                </div>
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={selectedServices.includes(index)}
                    readOnly
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-sm peer-checked:bg-[#0C7D7D] peer-checked:border-[#0C7D7D] after:content-[''] after:absolute after:hidden peer-checked:after:block after:left-[5px] after:top-[1px] after:w-[10px] after:h-[14px] after:border-white after:border-r-2 after:border-b-2 after:transform after:rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
          {showBanner && (
            <div className="bg-[#8aa6a6] flex justify-center p-4 relative mb-4 banner">
              <div className="text-center text-white">
                <p className="font-bold">Did you know?</p>
                <p>
                  Now you can get a quote and place a translation order within
                  seconds. <br /> Try our checkout form{" "}
                  <a href="#" className="font-bold underline">
                    HERE
                  </a>
                </p>
              </div>
              <button
                className="text-white absolute top-3 right-3"
                onClick={handleBannerClose}
              >
                <Cross className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
        <form>
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 mb-2">
            {formFields.map((field) => (
              <div key={field.id} className=" w-full">
                <Input
                  id={field.id}
                  placeholder={field.placeholder}
                  type={field.type}
                  required={field.required}
                  className="bg-white border w-full outline-none mb-2"
                />
              </div>
            ))}
          </div>
          <p className="text-primary text-base font-normal mb-2">
            Please provide any additional details or requirements
          </p>
          <div className="mb-5">
            <Textarea
              id="additional-info"
              placeholder="Additional information"
            />
          </div>
          <div className="space-y-2 mb-10">
            <Label
              htmlFor="hear-about-us"
              className="text-[15px] font-normal text-primary"
            >
              Where did you hear about us?
            </Label>
            <Select>
              <SelectTrigger
                id="hear-about-us"
                aria-label="Where did you hear about us?"
                className="bg-[#f7f7f7] text-sm font-normal text-[#444444] w-[280px]"
              >
                <SelectValue placeholder="-Please choose an option-" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="option1">
                  Current or Previous Client
                </SelectItem>
                <SelectItem value="option2">Search Google</SelectItem>
                <SelectItem value="option3">Search Bing</SelectItem>
                <SelectItem value="option4">Search Other</SelectItem>
                <SelectItem value="option5">Word of Mouth</SelectItem>
                <SelectItem value="option6">Social Media - Linkedin</SelectItem>
                <SelectItem value="option7">Social Media - Facebook</SelectItem>
                <SelectItem value="option8">Social Media - Other</SelectItem>
                <SelectItem value="option9">Tradeshow</SelectItem>
                <SelectItem value="option10">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            variant="primary"
            size="sm"
            className="rounded-md bg-[#F57127] w-[200px]"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
}