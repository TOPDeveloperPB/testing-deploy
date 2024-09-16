"use client";
import { usePathname } from "next/navigation";
import CustomLink from "./CustomLink";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  isTransparentNav: boolean;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
  isTransparentNav,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <CustomLink href={href} passHref>
      <span
        className={`text-sm relative ${isActive ? "active_link" : ""} ${
          isTransparentNav ? "text-[#111827]" : "text-white"
        } transition-colors duration-200 hover:text-[#2286E0]`}
      >
        {children}
      </span>
    </CustomLink>
  );
};

export default ActiveLink;
