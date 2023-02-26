import * as React from "react";
const SvgCompanyLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    role="img"
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="-20 -20 300 300"
      role="img"
      {...props}
    >
      <path
        fill="#737373"
        d="M146.25 0C173.174 0 195 21.826 195 48.75V65h32.5A32.5 32.5 0 0 1 260 97.5v58.012a372.976 372.976 0 0 1-130 23.238c-44.37.05-88.394-7.82-130-23.238V97.5C0 79.55 14.55 65 32.5 65H65V48.75C65 21.826 86.826 0 113.75 0h32.5Zm-16.088 113.75H130c-8.975 0-16.25 7.275-16.25 16.25s7.275 16.25 16.25 16.25h.162c8.975 0 16.25-7.275 16.25-16.25s-7.275-16.25-16.25-16.25ZM146.25 32.5h-32.5c-8.975 0-16.25 7.275-16.25 16.25V65h65V48.75c0-8.975-7.275-16.25-16.25-16.25ZM0 189.995V227.5C0 245.45 14.55 260 32.5 260h195c17.95 0 32.5-14.55 32.5-32.5v-37.505a405.827 405.827 0 0 1-130 21.255c-45.435 0-89.164-7.475-130-21.255Z"
      />
    </svg>
    <style>
      {
        "@media (prefers-color-scheme:light){:root{filter:none}}@media (prefers-color-scheme:dark){:root{filter:contrast(.625) brightness(2.5)}}"
      }
    </style>
  </svg>
);
export default SvgCompanyLogo;

