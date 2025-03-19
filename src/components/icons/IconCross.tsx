import type { SVGProps } from "react";
const SvgIconCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 15 15" {...props}>
    <g fill="#828FA3" fillRule="evenodd">
      <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
      <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
    </g>
  </svg>
);
export default SvgIconCross;
