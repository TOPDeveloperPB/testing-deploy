import { storyblokEditable } from "@storyblok/react/rsc";
import { Button } from "../ui/button";
import { ArrowRightIcon, ChevronDown, ArrowBigLeftIcon } from "lucide-react";

const icons = {
  "arrow-left": ArrowBigLeftIcon,
  "arrow-right": ArrowRightIcon,
  "chevron-down": ChevronDown,
};

const DynamicButton = ({ blok }: any) => {
  const IconComponent = icons[blok.icon as keyof typeof icons] || ArrowRightIcon;

  return (
    <Button 
      variant={blok?.variant || "primary"} 
      size={blok?.size || "sm"} 
      {...storyblokEditable(blok)}
    >
      {blok?.iconDirection === 'left' && <IconComponent className="mr-2" />}
      {blok?.title}
      {blok?.iconDirection === 'right' && <IconComponent className="ml-2" />}
    </Button>
  );
};

export default DynamicButton;