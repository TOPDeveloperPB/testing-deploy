import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CheckboxCard from "../global/complex-project-tab";
import Stepper from "./stepper";
import { storyblokEditable } from "@storyblok/react/rsc";

const TabComponent = ({blok}:any) => {
  return (
    <div className="bg-muted pt-20 sm:pt-24 md:pt-28" {...storyblokEditable(blok)}>
      <div className="container">
        <Tabs defaultValue="step1">
          <div className="text-center max-w-5xl mx-auto mb-16 md:mb-10">
            <TabsList className="gap-5">
              <TabsTrigger
                value="step1"
                className="text-sm py-4 px-12 w-full lg:max-w-92 rounded-xl border border-black data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Need certified/short translation
              </TabsTrigger>
              <TabsTrigger
                value="step2"
                className="text-sm py-4 px-3 sm:px-6 rounded-xl w-full lg:max-w-92 border border-black data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Complex project/seeking long partnership
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="step1">
            <Stepper />
          </TabsContent>
          <TabsContent value="step2" className="mt-20">
            <CheckboxCard />
          </TabsContent>
        </Tabs>
        <p className="text-center text-sm mb-20">If you want to ask questions first, contact us <a href="">info@kingsoftranslation.com</a> or by phone <a href="">1-646-876-5461</a></p>
      </div>
     
    </div>
  );
};

export default TabComponent;
