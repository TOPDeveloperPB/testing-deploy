import { SVGProps } from "react";

export function French(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="25" viewBox="0 0 32 25" fill="none" {...props}>
      <rect y="0.5" width="32" height="24" rx="2" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3333 0.5H32V24.5H21.3333V0.5Z"
        fill="#F93939"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.5H10.6667V24.5H0V0.5Z"
        fill="#1A47B8"
      />
    </svg>
  );
}
