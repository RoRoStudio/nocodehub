/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Wallet02IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Wallet02Icon(props: Wallet02IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.333 6.667V3.75c0-.694 0-1.04-.146-1.253a.833.833 0 00-.547-.35c-.255-.044-.57.101-1.199.392L4.05 5.952c-.561.259-.842.388-1.047.59-.182.177-.32.393-.406.633-.096.27-.096.58-.096 1.198V12.5m11.25-.417h.008M2.5 9.333v5.5c0 .934 0 1.4.182 1.757.16.314.414.569.728.728.357.182.823.182 1.757.182h9.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757v-5.5c0-.933 0-1.4-.182-1.756a1.666 1.666 0 00-.728-.729c-.357-.181-.823-.181-1.757-.181H5.167c-.934 0-1.4 0-1.757.181a1.66 1.66 0 00-.728.729C2.5 7.933 2.5 8.4 2.5 9.333zm11.667 2.75a.417.417 0 11-.834 0 .417.417 0 01.834 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.392"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Wallet02Icon;
/* prettier-ignore-end */
