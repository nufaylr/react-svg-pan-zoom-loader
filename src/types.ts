export interface ReactSvgmtSvgLoaderProps {
  path?: string | null;
  svgXML?: string | null;
  onSVGReady?: () => null;
  style?: StyleSheet;
  children?: React.ReactNode;
}

export interface ReactSvgmtSvgProxyProps {
  selector: string;
  onElementSelected?: () => {};
}

export interface ReactSvgPanZoomLoaderProps extends ReactSvgmtSvgLoaderProps {
  render: (content: React.ReactNode) => React.ReactNode;
  proxy?: React.ReactNode;
  src: string;
}

export type SvgLoaderSelectElementProps = Pick<ReactSvgmtSvgProxyProps, 'selector'>
