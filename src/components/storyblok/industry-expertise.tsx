import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const IndustryExpertise = ({ blok }: any) => {
  const getBackgroundColor = (index: number) => {
    if (index < 4) return "bg-[#fff5f0] ";
    if (index < 8) return "bg-[#E5FFEA] ";
    return "bg-[#EEE5FF] ";
  };

  return (
    <section className="pb-24 bg-muted" {...storyblokEditable(blok)}>
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-[27px] md:text-[40px] lg:text-5xl text-primary font-bold mb-1 md:mb-4 lg:mb-6">
          {blok?.title}
        </h2>
        <p className="text-popover text-base lg:text-lg font-normal mb-4 sm:mb-6">
          {blok?.description}
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 ">
          {blok?.expertise.map((item: any, index: number) => (
            <div className="group" key={index}>
              <div
                className={`flex items-center p-3 rounded-3xl transition-colors duration-300 ease-in-out  cursor-pointer
                 hover:bg-[#fff5f0] bg-white`}
              >
                <div
                  className={`p-3 rounded-2xl transition-colors duration-300 ease-in-out
                  ${getBackgroundColor(index)} group-hover:bg-white`}
                >
                  <Image
                    src={item.image.filename}
                    alt={item.image?.alt}
                    width={40}
                    height={40}
                    className="max-w-[32px] md:max-w-[40px]"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-normal">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
