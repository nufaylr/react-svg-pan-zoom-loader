export interface ReactSvgmtSvgLoaderProps {
  path?: string | null;
  svgXML?: string | null;
  onSVGReady?: () => null;
  style?: StyleSheet;
  children?: React.ReactNode;
}

export interface ReactSvgmtSvgProxyProps {
  selector: string;
  onElementSelected?: () => SVGElement[] | SVGElement;
}

export interface ReactSvgPanZoomLoaderProps
  extends Omit<ReactSvgmtSvgLoaderProps, "onSVGReady" | "children" | "path"> {
  render: (content: React.ReactNode) => React.ReactNode;
  proxy?: React.ReactNode;
  src: string;
}

export interface SvgLoaderSelectElementProps
  extends Omit<ReactSvgmtSvgProxyProps, "onElementSelected"> {
  onClick?: (event:React.MouseEvent) => any;
}
