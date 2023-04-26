import React from 'react'
import { SvgProxy } from 'react-svgmt'
import { SvgLoaderSelectElementProps } from "./types";

/**
 * Select svg node element
 */
const SvgLoaderSelectElement = (props: SvgLoaderSelectElementProps) => {
  const { selector, ...other } = props;
  return <SvgProxy selector={selector} {...other} />;
};

export {SvgLoaderSelectElement}