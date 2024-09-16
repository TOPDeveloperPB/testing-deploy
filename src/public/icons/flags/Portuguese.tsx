import { SVGProps } from "react";

export function Portuguese(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="25" viewBox="0 0 32 25" fill="none" {...props}>
      <rect y="0.5" width="32" height="24" rx="2" fill="#F93939" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.5H10.6667V24.5H0V0.5Z"
        fill="#249F58"
      />
      <path
        d="M10.6667 16.5C13.1914 16.5 15.2381 14.351 15.2381 11.7C15.2381 9.04906 13.1914 6.90002 10.6667 6.90002C8.14194 6.90002 6.09525 9.04906 6.09525 11.7C6.09525 14.351 8.14194 16.5 10.6667 16.5Z"
        fill="#FFDA2C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7143 13.3V8.5H7.61905V13.3C7.61905 14.1832 8.98286 14.9 10.6667 14.9C12.3505 14.9 13.7143 14.1832 13.7143 13.3Z"
        fill="#F93939"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14285 10.1H12.1905V13.3H9.14285V10.1Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14285 10.1H10.6667V11.7H9.14285V10.1ZM10.6667 11.7H12.1905V13.3H10.6667V11.7Z"
        fill="#1A47B8"
      />
    </svg>
  );
}
