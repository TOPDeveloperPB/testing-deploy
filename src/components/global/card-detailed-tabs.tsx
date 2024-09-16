import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Check from "./../../../public/images/checkgreen.svg";
import Translating from "./../../../public/images/Translation-Services-1.webp";
import Cross from "./../../../public/images/closemodal.svg";
import { JSX, SVGProps } from "react";

export default function CardDetailed({ onClose }: any) {
  const services = [
    {
      title: "Document Translation",
      description:
        "We translate any document and handle all certifications and notarizations.",
    },
    {
      title: "Legal Content Translation",
      description: "Expert linguists ensure precise legal terminology.",
    },
    {
      title: "Technical Documentation Translation",
      description:
        "Accurate, cost-effective translations with identical layouts.",
    },
    {
      title: "Content Translation",
      description:
        "Perfect for marketing, legal, technical, and specialized content with identical layouts.",
    },
    {
      title: "Marketing Content Translation",
      description:
        "Polished, native-sounding translations that resonate with your audience.",
    },
    {
      title: "Patent Translation Services",
      description:
        "Secure your intellectual property with our reliable, affordable patent translations.",
    },
  ];

  const technologies = [
    {
      title: "KoT Cloud",
      description: "Manage your translation requests 10x faster.",
    },
    {
      title: "KoT Editor",
      description:
        " Our linguists use the most advanced CAT tools for your translations.",
    },
    {
      title: "Translation Memory",
      description: " Ensuring consistency in every translation.",
    },
    {
      title: "Integration (API)",
      description: "Seamlessly integrate with your CMS.",
    },
    {
      title: "Quality Assurance Tools",
      description: " Guaranteeing error-free translations.",
    },
    {
      title: "KoT Certificator",
      description: "Certifying your translations for global acceptance.",
    },
  ];

  const languages = [
    {
      title: "European Languages",
      description: "Covering 24+ European languages to meet all your needs.",
    },
    {
      title: "Asian Languages",
      description: "Bridging gaps with 20+ Asian languages.",
    },
    {
      title: "Middle Eastern Languages",
      description: "Expert translations in 15+ Middle Eastern languages.",
    },
    {
      title: "African Languages",
      description: "Diverse translations for 30+ African languages.",
    },
    {
      title: "American Languages",
      description: "Accurate translations across 10+ American languages.",
    },
    {
      title: "Pacific Languages",
      description: "Fluent in 10+ Pacific languages for your global reach.",
    },
  ];

  return (
    <div className="bg-muted">
      <div className="py-8 max-w-2xl lg:container mx-auto">
        <Tabs defaultValue="services">
          <div className="flex lg:flex-row flex-col items-center gap-2 relative">
            <div className="relative">
              <div className="relative">
                <Image
                  src={Translating}
                  alt="Translation Services"
                  className="h-[250px] mb-4 max-w-full lg:max-w-[340px] rounded-3xl"
                />
              </div>
              <div
                onClick={onClose}
                className="cursor-pointer absolute top-0 left-0 z-10 flex items-center border-8 border-white justify-center w-16 h-16 bg-primary rounded-full transform -translate-x-3 -translate-y-3"
              >
                <Image src={Cross} alt="Close" />
              </div>
              <div className="absolute top-52 left-0 right-0 py-1 px-4 rounded-full mx-5 bg-gray-200 bg-opacity-75 z-20">
                <p className="text-base font-bold text-primary text-center">
                  Translation Services
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="overflow-x-auto whitespace-nowrap">
                <TabsList className="flex flex-row justify-start ml-0 gap-3">
                  <TabsTrigger
                    value="services"
                    className="text-base font-bold rounded-t-[50px] px-10 py-2 ml-0"
                  >
                    Translation Services
                  </TabsTrigger>
                  <TabsTrigger
                    value="technologies"
                    className="text-base font-bold rounded-t-xl px-5"
                  >
                    Technologies
                  </TabsTrigger>
                  <TabsTrigger
                    value="languages"
                    className="text-base font-bold rounded-t-xl px-5"
                  >
                    Supported Languages
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent
                value="services"
                className="bg-white pt-6 px-5 rounded-b-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-lg lg:text-xl text-primary font-bold mb-0 lg:mb-3">
                      Translating Over 20 Million Words Annually
                    </h2>
                    <Button
                      variant="outline"
                      size="xs"
                      className="w-full"
                      icon={<ArrowRightIcon />}
                    >
                      Lear more
                    </Button>
                  </div>
                  <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-0">
                    {services.map((service, index) => (
                      <div key={index} className="">
                        <div className="flex items-start space-x-2 mb-4">
                          <Image src={Check} alt="Check" className="mt-1" />
                          <div>
                            <h3 className="font-bold text-primary text-sm mb-1">
                              {service.title}
                            </h3>
                            <p className="text-sm font-normal text-popover">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="technologies"
                className="bg-white pt-6 px-5 rounded-b-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-lg lg:text-xl text-primary font-bold mb-3">
                      Developed with a Love for Language
                    </h2>
                    <Button
                      variant="destructive"
                      size="xs"
                      icon={<ArrowRightIcon />}
                    >
                      Learn more
                    </Button>
                  </div>
                  <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-0">
                    {technologies.map((tech, index) => (
                      <div key={index} className="">
                        <div className="flex items-start space-x-2 mb-4">
                          <Image src={Check} alt="Check" className="mt-1" />
                          <div>
                            <h3 className="font-bold text-primary text-sm mb-1">
                              {tech.title}
                            </h3>
                            <p className="text-sm font-normal text-popover">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="languages"
                className="bg-white pt-6 px-5 rounded-b-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-lg lg:text-xl text-primary font-bold mb-3">
                      120+ Languages Covered
                    </h2>
                    <Button
                      variant="destructive"
                      size="xs"
                      icon={<ArrowRightIcon />}
                    >
                      Learn more
                    </Button>
                  </div>
                  <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-0">
                    {languages.map((lang, index) => (
                      <div key={index} className="">
                        <div className="flex items-start space-x-2 mb-4">
                          <Image src={Check} alt="Check" className="mt-1" />
                          <div>
                            <h3 className="font-bold text-primary text-sm mb-1">
                              {lang.title}
                            </h3>
                            <p className="text-sm font-normal text-popover">
                              {lang.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
