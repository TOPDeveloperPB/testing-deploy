import { SVGProps } from "react";

export function Arabic(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="25" viewBox="0 0 32 25" fill="none" {...props}>
      <path
        d="M28.9524 0.5H3.04762C1.36447 0.5 0 1.93269 0 3.7V21.3C0 23.0673 1.36447 24.5 3.04762 24.5H28.9524C30.6355 24.5 32 23.0673 32 21.3V3.7C32 1.93269 30.6355 0.5 28.9524 0.5Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16.5H32V24.5H0V16.5Z"
        fill="#151515"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.5H32V8.5H0V0.5Z"
        fill="#249F58"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.5V24.5H9.14286V0.5H0Z"
        fill="#F93939"
      />
    </svg>
  );
}
