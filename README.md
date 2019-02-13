# react-svg-pan-zoom-loader

This package allows us to load a SVG file remotely into [`react-svg-pan-zoom`](https://github.com/chrvadala/react-svg-pan-zoom)  component. 

## Installation
```sh
npm install react-svg-pan-zoom-loader
```

## Usage

Example 1 :

```js

import {ReactSvgPanZoomLoader} from 'react-svg-pan-zoom-loader'

...

return (
    <ReactSvgPanZoomLoader src="image.svg" render= {(content) => (
        <ReactSVGPanZoom width={500} height={500}>
            <svg width={500} height={500} >
                {content}
            </svg>  
        </ReactSVGPanZoom>
    )}/>
)
```

Example 2 with proxy node prop type, under here we can target `<SvgLoaderSelectElement/>` component.

```js

import {ReactSvgPanZoomLoader, SvgLoaderSelectElement} from 'react-svg-pan-zoom-loader'

...

return (
    <ReactSvgPanZoomLoader src="image.svg" proxy = {
        <> 
            <SvgLoaderSelectElement 
            selector="#tree" 
            onClick={onItemClick} 
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