import type { SVGProps } from "react";
const SvgAddNewBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#635fc7"
      d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
    />
  </svg>
);
export default SvgAddNewBoard;
