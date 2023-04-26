declare module "react-svgmt" {
	type ReactSvgmtSvgLoaderProps = import("./types").ReactSvgmtSvgLoaderProps;
	type ReactSvgmtSvgProxyProps = import("./types").ReactSvgmtSvgProxyProps;

	function SvgLoader(prop: ReactSvgmtSvgLoaderProps): React.ReactNode;
	function SvgProxy(prop: ReactSvgmtSvgProxyProps): React.ReactNode;
}
