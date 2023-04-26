import React from 'react'
import { SvgLoader } from 'react-svgmt'
import { ReactSvgPanZoomLoaderProps } from "./types";

/**
 * Loading the svg file using react-svgmt
 */
const ReactSvgPanZoomLoader = (props: ReactSvgPanZoomLoaderProps) => {
	const { render, src, proxy, ...other } = props;
	return (
    <div>
      {render(
        <SvgLoader path={src} {...other}>
          {proxy}
        </SvgLoader>
      )}
    </div>
  );
};

export {ReactSvgPanZoomLoader}
