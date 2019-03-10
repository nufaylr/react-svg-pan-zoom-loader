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

Example 1 :

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

Example 2 with proxy node prop type, under here we can manipulate svg element attributes `<SvgLoaderSelectElement/>` component.

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

## Live Demo
[![Edit react-svg-pan-zoom-loader](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/o9840636p6?fontsize=14)

## Contributors
- [nufaylr](https://github.com/nufaylr) (author)
- [chrvadala](https://github.com/chrvadala)
