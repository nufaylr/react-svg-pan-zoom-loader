import React, { Component, StrictMode } from "react";
import { ReactSVGPanZoom } from "react-svg-pan-zoom";
import { ReactSvgPanZoomLoader } from "../src";

const label = "SVG file src path";
const svgStr = '<svg width="500" height="400" xmlns="http://www.w3.org/2000/svg"><!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --><g><title>background</title><rect fill="#fff" id="canvas_background" height="402" width="502" y="-1" x="-1"/><g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"><rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/></g></g><g><title>Layer 1</title><path id="svg_1" d="m118,242l64,-153l63,157c0,0 45,-71 49,-68c4,3 11,146 12,146c1,0 -173,-7 -173,-7c0,0 -61,-72 -61,-72c0,0 110,-156 46,-3z" fill-opacity="0.7" stroke-width="2" stroke="#995757" fill="#995757"/></g></svg>';

export default class ReactSvgPanZoomWithXmlStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      tool: "auto"
    };
  }

  render() {
    return (
      <StrictMode>
        <ReactSvgPanZoomLoader
		  svgXML={svgStr}
          render={content => (
            <ReactSVGPanZoom
              width={500}
              height={500}
              tool={this.state.tool}
              value={this.state.value}
              onChangeTool={nextTool => this.setState({ tool: nextTool })}
              onChangeValue={nextValue => this.setState({ value: nextValue })}
            >
              <svg width={500} height={500}>
                {content}
              </svg>
            </ReactSVGPanZoom>
          )}
        />
      </StrictMode>
    );
  }
}
