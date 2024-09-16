import { SVGProps } from "react";

export function Chinese(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="25" viewBox="0 0 32 25" fill="none" {...props}>
      <rect y="0.5" width="32" height="24" rx="2" fill="#F93939" />
      <path
        d="M28.9524 0.5H3.04762C1.36447 0.5 0 1.93269 0 3.7V21.3C0 23.0673 1.36447 24.5 3.04762 24.5H28.9524C30.6355 24.5 32 23.0673 32 21.3V3.7C32 1.93269 30.6355 0.5 28.9524 0.5Z"
        fill="#F93939"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.37807 12.068L6.13807 13.3048L6.56474 10.6856L4.75446 8.82959L7.25807 8.45039L8.37807 6.06639L9.49655 8.45039L12.0002 8.82959L10.1868 10.6856L10.6166 13.3032L8.37807 12.068ZM13.7145 5.29999H15.2383V6.89999H13.7145V5.29999ZM15.2383 8.49999H16.7621V10.1H15.2383V8.49999ZM15.2383 11.7H16.7621V13.3H15.2383V11.7ZM13.7145 14.9H15.2383V16.5H13.7145V14.9Z"
        fill="#FFDA2C"
      />
    </svg>
  );
}
