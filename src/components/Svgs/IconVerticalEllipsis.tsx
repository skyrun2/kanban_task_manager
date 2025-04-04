import type { SVGProps } from "react";
const SvgIconVerticalEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="100%"
    height="100%"
    {...props}
  >
    <g fill="#828FA3" fillRule="evenodd">
      <circle cx={10} cy={2.308} r={2.308} />
      <circle cx={10} cy={10} r={2.308} />
      <circle cx={10} cy={17.692} r={2.308} />
    </g>
  </svg>
);
export default SvgIconVerticalEllipsis;
