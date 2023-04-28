# react-svg-pan-zoom-loader

This package allows us to load a SVG file remotely into [`react-svg-pan-zoom`](https://github.com/chrvadala/react-svg-pan-zoom)  component.

## Installation

### YARN
```sh
yarn add react-svg-pan-zoom-loader
```

### NPM
```sh
npm install --save react-svg-pan-zoom-loader
```

## Usage

Example using `src` prop:

```js

import {ReactSvgPanZoomLoader} from 'react-svg-pan-zoom-loader'

...

return (
    <ReactSvgPanZoomLoader src="file/path/image.svg" render= {(content) => (
        <ReactSVGPanZoom width={500} height={500}>
            <svg width={500} height={500} >
                {content}
            </svg>
        </ReactSVGPanZoom>
    )}/>
)
```

Example using `svgXML` prop:

```js

import {ReactSvgPanZoomLoader} from 'react-svg-pan-zoom-loader'

...

return (
    <ReactSvgPanZoomLoader svgXML={svgAsString} render= {(content) => (
        <ReactSVGPanZoom width={500} height={500}>
            <svg width={500} height={500} >
                {content}
            </svg>
        </ReactSVGPanZoom>
    )}/>
)
```

Example using `src` prop with proxy node prop type, under here we can manipulate svg element attributes `<SvgLoaderSelectElement/>` component.

```js

import {ReactSvgPanZoomLoader, SvgLoaderSelectElement} from 'react-svg-pan-zoom-loader'

...

return (
    <ReactSvgPanZoomLoader src="file/path/image.svg" proxy = {
        <>
            <SvgLoaderSelectElement selector="#tree" onClick={onItemClick}
            stroke={props.strokeColor}/>
        </>
    } render= {(content) => (

        <ReactSVGPanZoom width={500} height={500}>
            <svg width={500} height={500} >
                {content}
            </svg>
        </ReactSVGPanZoom>

    )}/>
)
```

Example using `svgXML` prop with proxy node prop type, under here we can manipulate svg element attributes `<SvgLoaderSelectElement/>` component.

```js

import {ReactSvgPanZoomLoader, SvgLoaderSelectElement} from 'react-svg-pan-zoom-loader'

...
const svgAsString = '<svg xmlns="http://www.w3.org/2000/svg...'

return (
    <ReactSvgPanZoomLoader svgXML={svgAsString} proxy = {
        <>
            <SvgLoaderSelectElement selector="#tree" onClick={onItemClick}
            stroke={props.strokeColor}/>
        </>
    } render= {(content) => (

        <ReactSVGPanZoom width={500} height={500}>
            <svg width={500} height={500} >
                {content}
            </svg>
        </ReactSVGPanZoom>

    )}/>
)
```

### Typescript type definitions
Contributed by [Rafal Witczak](https://github.com/rafw87)

```sh
npm i @types/react-svg-pan-zoom-loader
```

## Live Demo
[![Edit react-svg-pan-zoom-loader](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/o9840636p6?fontsize=14)

## Contributors
- [nufaylr](https://github.com/nufaylr) (author)
- [chrvadala](https://github.com/chrvadala)
- SVG XML feature contributed by [acenturyandabit](https://github.com/acenturyandabit) and [jamesmenera](https://github.com/jamesmenera)
