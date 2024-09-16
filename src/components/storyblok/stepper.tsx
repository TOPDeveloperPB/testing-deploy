"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import Image from "next/image";
import Secure from "./../../../public/images/Untitled.png";
import { ChevronDownIcon } from "lucide-react";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export default function Stepper({blok}:any) {
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedOption, setSelectedOption] = useState("yes");
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [openMulti, setOpenMulti] = useState(false);

  // State for single-select
  const [selectedValue, setSelectedValue] = useState("");
  const [openSingle, setOpenSingle] = useState(false);
  const [selectedTranslation, setSelectedTranslation] = useState<string | null>(
    null
  );
  const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);

  const handleMultiSelect = (currentValue: string) => {
    //@ts-ignore
    if (selectedValues.includes(currentValue)) {
      setSelectedValues(
        selectedValues.filter((value) => value !== currentValue)
      );
    } else {
      //@ts-ignore
      setSelectedValues([...selectedValues, currentValue]);
    }
    setOpenMulti(false);
  };

  const handleMultiRemove = (valueToRemove: never) => {
    setSelectedValues(
      selectedValues.filter((value) => value !== valueToRemove)
    );
  };

  // Single-select handler
  const handleSingleSelect = (currentValue: React.SetStateAction<string>) => {
    setSelectedValue(currentValue === selectedValue ? "" : currentValue);
    setOpenSingle(false);
  };
  interface CustomCardProps {
    value: string;
    label: string;
    description: string;
    badge: string;
    onChange: (value: string) => void;
    isLeft?: boolean;
    isSelected?: boolean;
  }

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  const steps = [
    { number: 1, label: "Contacts" },
    { number: 2, label: "Documents" },
    { number: 3, label: "Additional Information" },
    { number: 4, label: "Options" },
    { number: 5, label: "Place Order" },
  ];

  const benefits = [
    { text: "Guaranteed USCIS Acceptance", icon: CheckIcon },
    { text: "Certificate of Translation Accuracy", icon: CheckIcon },
    { text: "100% Human Translation", icon: CheckIcon },
    { text: "Secure Document Handling", icon: CheckIcon },
    { text: "Electronic PDF Delivered via E-mail", icon: CheckIcon },
    { text: "Physical Copies Available", icon: CheckIcon },
    { text: "Notarization Available", icon: CheckIcon },
  ];
  const options = {
    translation: [
      {
        value: "certified",
        label: "CERTIFIED",
        description:
          "Widely accepted in the UK for official use, such as Passport Office, Home Office, NARIC, and DVLA, and abroad.",
        badge: "FREE",
      },
      {
        value: "only-translation",
        label: "ONLY TRANSLATION",
        description:
          "For those requiring expert translations with subject matter specialists and precise terminology.",
        badge: "FREE",
      },
    ],
    delivery: [
      {
        value: "digital-delivery",
        label: "DIGITAL DELIVERY",
        description: "Arrives to your email immediately when completed.",
        badge: "FREE",
      },
      {
        value: "digital-physical",
        label: "DIGITAL & PHYSICAL COPY",
        description: "Express 2-day shipping via DHL.",
        badge: "£12.95",
      },
    ],
  };

  const securityFeatures = [{ icon: LockIcon, text: "Secure and Private" }];

  return (
    <div className="bg-muted" {...storyblokEditable(blok)}>
      <div className="px-0 lg:px-8">
        <h2 className="text-[32px] text-secondary font-bold">
          Feel free to place an order in seconds preview
        </h2>
        <div className="flex flex-col items-center py-8">
          <div className="w-full">
            {currentStep < 5 && (
              <div className="lg:flex lg:justify-center mb-8">
                {/* Mobile layout (below lg) */}
                <div className="lg:hidden w-full">
                  {/* Active step */}
                  <div className="w-full mb-4">
                    {steps.map(
                      (step) =>
                        step.number === currentStep && (
                          <div
                            key={step.number}
                            onClick={() => setCurrentStep(step.number)}
                            className="haji flex justify-center items-center py-3 mx-2 border rounded-md w-full bg-[#e8f3f3] border-[#d1e1e1]"
                          >
                            <div className="flex items-center justify-center w-7 h-7 mr-2 text-[#337a7a] border-2 border-[#337a7a] bg-white rounded-full">
                              {step.number}
                            </div>
                            <span className="text-xs text-[#337a7a] font-medium">
                              {step.label}
                            </span>
                          </div>
                        )
                    )}
                  </div>

                  {/* Other steps */}
                  <div className="flex justify-center">
                    {steps.map(
                      (step) =>
                        step.number !== currentStep && (
                          <div
                            key={step.number}
                            onClick={() => setCurrentStep(step.number)}
                            className={`haji flex justify-center items-center py-3 mx-2 border rounded-md w-full ${
                              step.number < currentStep
                                ? "bg-[#e8f3f3] border-[#d1e1e1]"
                                : "bg-white border-white"
                            }`}
                          >
                            <div
                              className={`flex items-center justify-center w-7 h-7 ${
                                step.number < currentStep
                                  ? "text-white bg-[#0C7D7D] rounded-full"
                                  : "text-[#337a7a] border-2 border-[#337a7a] bg-white rounded-full"
                              }`}
                            >
                              {step.number < currentStep ? (
                                <CheckIcon className="w-4 h-4" />
                              ) : (
                                step.number
                              )}
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>

                {/* Desktop layout (lg and above) */}
                {steps.map((step) => (
                  <div
                    key={step.number}
                    onClick={() => setCurrentStep(step.number)}
                    className={`haji hidden lg:flex justify-center items-center py-3 mx-2 border rounded-md w-[280px] ${
                      currentStep > step.number
                        ? "bg-[#e8f3f3] border-[#d1e1e1]"
                        : currentStep === step.number
                        ? "bg-[#e8f3f3] border-[#d1e1e1]"
                        : "bg-white border-white"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-7 h-7 mr-2 ${
                        currentStep > step.number
                          ? "text-white bg-[#0C7D7D] rounded-full"
                          : currentStep === step.number
                          ? "text-[#337a7a] border-2 border-[#337a7a] bg-white rounded-full"
                          : "text-[#337a7a] border-2 border-[#337a7a] bg-white rounded-full"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckIcon className="w-4 h-4" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span
                      className={`text-xs ${
                        currentStep >= step.number
                          ? "text-[#337a7a]"
                          : "text-[#222222]"
                      } font-medium`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div
              className={`grid ${
                currentStep === 5
                  ? "grid-cols-1"
                  : "grid-cols-6 lg:grid-cols-12"
              } gap-6`}
            >
              <div
                className={`p-4 md:p-8 bg-[#F7F7F7] rounded-lg ${
                  currentStep === 5 ? "col-span-full" : "col-span-8"
                }`}
              >
                {currentStep === 1 && (
                  <>
                    <h2 className="text-lg text-primary font-bold mb-1">
                      Get started
                    </h2>
                    <p className="text-sm font-normal text-primary mb-7">
                      Enter your contact information to begin the checkout
                      process.
                    </p>
                    <div className="text-sm text-[#3B3B3B] w-full md:w-72">
                      <Input
                        placeholder="Full name"
                        className="mb-3 bg-white md:w-auto min-w-full"
                      />
                    </div>
                    <div className="w-full md:w-72">
                      <Input
                        placeholder="Email"
                        className="mb-8 bg-white md:w-auto min-w-full"
                      />
                    </div>
                    <div className="p-4 border rounded-lg max-w-lg">
                      <p className="text-sm font-normal">
                        <strong>Note:</strong> This form is for people who would
                        like to quickly receive a quote and place their order in
                        seconds. If you have any questions to ask us first, or
                        if you prefer to receive a quote now and then confirm
                        your order at a later time, {"that's"} great too! The
                        old form can be found{" "}
                        <Link
                          href="#"
                          className="text-primary"
                          prefetch={false}
                        >
                          <strong>here</strong>
                        </Link>
                        .
                      </p>
                    </div>
                  </>
                )}
                {currentStep === 2 && (
                  <div className="">
                    <h2 className="mb-6 text-xl font-bold">
                      Choose language pair and upload documents
                    </h2>
                    <div className="flex md:flex-row flex-col items-center gap-5">
                      <Popover open={openSingle} onOpenChange={setOpenSingle}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openSingle}
                            className="w-full rounded-md justify-between border-none bg-white hover:bg-white text-black hover:text-black font-light text-xs"
                          >
                            {selectedValue
                              ? frameworks.find(
                                  (framework) =>
                                    framework.value === selectedValue
                                )?.label
                              : "Select framework..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command className="bg-white w-full">
                            <CommandInput placeholder="Search framework..." />
                            <CommandList className="w-full">
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framework) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={() =>
                                      handleSingleSelect(framework.value)
                                    }
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        selectedValue === framework.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {framework.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <Image
                        src="/images/arrow-right.svg"
                        alt=""
                        width={10}
                        height={10}
                        className="md:rotate-0 rotate-90"
                      />
                      <Popover open={openMulti} onOpenChange={setOpenMulti}>
                        <PopoverTrigger asChild>
                          <Button
                            role="combobox"
                            aria-expanded={openMulti}
                            className="w-full rounded-md justify-between border-none bg-white hover:bg-white text-black hover:text-black font-light text-xs"
                          >
                            {selectedValues.length > 0 ? (
                              <div className="flex flex-wrap gap-1">
                                {selectedValues.map((value) => (
                                  <span
                                    key={value}
                                    className="flex items-center bg-[#0C7D7D] text-white px-2 py-1 rounded"
                                  >
                                    {
                                      frameworks.find(
                                        (framework) => framework.value === value
                                      )?.label
                                    }
                                    <button
                                      className="ml-1 text-white"
                                      onClick={() => handleMultiRemove(value)}
                                    >
                                      ×
                                    </button>
                                  </span>
                                ))}
                              </div>
                            ) : (
                              "Select frameworks..."
                            )}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command className="bg-white">
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framework) => (
                                  <CommandItem
                                    className=""
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={() =>
                                      handleMultiSelect(framework.value)
                                    }
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4 bg-[#E7F2F2]",
                                        //@ts-ignore
                                        selectedValues.includes(framework.value)
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {framework.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex justify-center py-28">
                      <Button className="flex gap-4 items-center border border-[#2A6A6A] text-[#2A6A6A] bg-white hover:bg-gray-100 rounded-md py-6 px-4">
                        <PlusIcon className="w-5 h-5 mr-2" />
                        Add files
                        <ChevronDownIcon className="w-5 h-5 ml-6 hover:border border-[#2A6A6A]" />
                      </Button>
                    </div>
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-medium">
                        Would you like to provide any additional information for
                        the translator (like correct spelling for names)?
                      </p>
                      <RadioGroup
                        value={selectedOption}
                        onValueChange={(value) => setSelectedOption(value)}
                        className="flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes" />
                          <label
                            htmlFor="yes"
                            className="text-sm font-medium leading-none"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <label
                            htmlFor="no"
                            className="text-sm font-medium leading-none"
                          >
                            No
                          </label>
                        </div>
                      </RadioGroup>
                    </div>
                    {selectedOption === "yes" && (
                      <div className="space-y-2">
                        <label
                          htmlFor="additional-info"
                          className="text-sm font-medium leading-none"
                        >
                          Additional information:
                        </label>
                        <Textarea
                          id="additional-info"
                          placeholder=""
                          className="min-h-[80px] max-w-[400px] bg-[#F2F2F2]"
                        />
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xl font-bold mb-3">
                        Translation type
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        {options.translation.map((option, index) => (
                          <CustomCard
                            key={option.value}
                            value={option.value}
                            label={option.label}
                            description={option.description}
                            badge={option.badge}
                            onChange={setSelectedTranslation}
                            isLeft={index % 2 === 0}
                            isSelected={selectedTranslation === option.value} // Pass isSelected prop
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3">
                        Delivery Method
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        {options.delivery.map((option, index) => (
                          <CustomCard
                            key={option.value}
                            value={option.value}
                            label={option.label}
                            description={option.description}
                            badge={option.badge}
                            onChange={setSelectedDelivery}
                            isLeft={index % 2 === 0}
                            isSelected={selectedDelivery === option.value} // Pass isSelected prop
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 5 && (
                  <div className="flex flex-col items-center justify-center p-4">
                    <Image
                      src="/images/Interpreting-Services-1.webp"
                      alt="Success Illustration"
                      className="mb-8"
                      width="400"
                      height="200"
                      style={{ aspectRatio: "400/200", objectFit: "cover" }}
                    />
                    <h2 className="mb-4 text-2xl font-semibold text-center text-[#0C7D7D]">
                      Success!
                    </h2>
                    <p className="mb-8 text-center text-[#0C7D7D]">
                      Your quote request is on way to a member of our team who
                      will contact you with the price and terms of your
                      translation project as soon as possible. We will aim to
                      respond to you within 1 hour. Thank you for your patience
                      - we look forward to working with you.
                    </p>
                    <Button className="bg-[#0C7D7D] text-white rounded-md">
                      Go to Home Page
                    </Button>
                  </div>
                )}
              </div>
              {currentStep < 5 && (
                <div className="col-span-8 lg:col-span-4">
                  {currentStep !== 5 && (
                    <div className="p-6 bg-white rounded-lg mb-4 next-prev-area">
                      <h3 className="text-base text-[#0E7D7D] font-bold border-b text-center pb-4 mb-4">
                        {currentStep === 1 ? "WHAT'S INCLUDED" : "Summary"}
                      </h3>
                      {currentStep === 1 && (
                        <ul className="mb-4">
                          {benefits.map((benefit, index) => (
                            <li
                              key={index}
                              className="flex items-center text-primary text-sm font-normal mb-1"
                            >
                              <benefit.icon className="w-4 h-4 text-primary mr-2" />
                              {benefit.text}
                            </li>
                          ))}
                        </ul>
                      )}
                      {currentStep === 2 && (
                        <p className="mb-4 text-sm">
                          The price will be estimated in the next step.
                        </p>
                      )}
                      {currentStep === 3 && (
                        <p className="mb-4 text-sm">
                          Afrikaans - Amharic
                          <br />
                          <span className="text-gray-500">words</span>
                        </p>
                      )}
                      {currentStep === 4 && (
                        <div className="mb-4 text-sm">
                          <p className="mb-4 text-sm">
                            Afrikaans - Amharic
                            <br />
                            <span className="text-gray-500">words</span>
                          </p>
                          {selectedTranslation && (
                            <>
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="mt-2">
                                    <strong>Translation type</strong>
                                  </p>
                                  <p>{selectedTranslation.toUpperCase()}</p>
                                </div>
                                <p>FREE</p>
                              </div>
                            </>
                          )}
                          {selectedDelivery && (
                            <>
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="mt-2">
                                    <strong>Translation type</strong>
                                  </p>
                                  <p>{selectedDelivery.toUpperCase()}</p>
                                </div>
                                <p>
                                  {selectedDelivery === "digital-physical"
                                    ? "£12.95"
                                    : "FREE"}
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                      {currentStep < 5 && (
                        <Button
                          variant="secondary"
                          className="w-full mb-4"
                          onClick={() => setCurrentStep((prev) => prev + 1)}
                        >
                          Next:{" "}
                          {currentStep === 1
                            ? "Documents"
                            : currentStep === 2
                            ? "Additional Information"
                            : currentStep === 3
                            ? "Options"
                            : "Get a Quote"}
                        </Button>
                      )}
                      {currentStep > 1 && currentStep < 5 && (
                        <Button
                          variant="outline"
                          className="w-full rounded-md justify-center border-none bg-[#EBF1F1] hover:bg-[#f2f6f6] text-[#0e7d7d] hover:text-[#0e7d7d] font-light text-xs"
                          onClick={() => setCurrentStep((prev) => prev - 1)}
                        >
                          Back: {steps[currentStep - 2]?.label}
                        </Button>
                      )}

                      <div className="p-4 bg-[#e7f2f2] rounded-lg mt-12">
                        {securityFeatures.map((feature, index) => (
                          <div key={index} className="mb-2 flex items-center">
                            <feature.icon className="w-6 h-6 text-[#0e7d7d] mr-2" />
                            <h3 className="text-sm font-bold text-[#0e7d7d]">
                              {feature.text}
                            </h3>
                          </div>
                        ))}
                        <p className="text-sm font-normal text-primary mb-3">
                          All data processed by our site, including uploaded
                          files, is encrypted. Only essential staff with signed
                          NDAs have access to your information.
                        </p>
                        <Image src={Secure} alt="Secure" className="h-6 w-32" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11V7a3 3 0 00-6 0v4M18 11V7a6 6 0 00-12 0v4M5 11h14v10H5V11z"
      />
    </svg>
  );
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}
//@ts-ignore
const CustomCard: React.FC<CustomCardProps> = ({
  value,
  label,
  description,
  badge,
  onChange,
  isLeft,
  isSelected,
}) => (
  <Card
    onClick={() => onChange(value)}
    className={`py-3 px-4 border cursor-pointer ${
      isLeft
        ? "rounded-t-xl md:rounded-l-xl rounded-b-none md:rounded-r-none"
        : "rounded-b-xl md:rounded-l-none rounded-t-none md:rounded-r-xl"
    } ${isSelected ? "border-primary" : ""}`}
  >
    <CardContent>
      <div className="flex items-start space-x-4">
        <RadioGroup>
          <RadioGroupItem
            value={value}
            id={`radio-${value}`}
            checked={isSelected}
            //@ts-ignore
            readOnly
          />
          <div>
            <div className="flex items-center space-x-2">
              <label
                htmlFor={`radio-${value}`}
                className="text-lg font-semibold text-teal-700"
              >
                {label}
              </label>
              <Badge
                variant="secondary"
                className="bg-[#EBF1F1] text-[#63B0B0] hover:bg-[#EBF1F1] px-2 py-1 rounded"
              >
                {badge}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          </div>
        </RadioGroup>
      </div>
    </CardContent>
  </Card>
);