import React, {Component, StrictMode} from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom'

export default class MainStory extends Component {
  state = {
    value: {},
    tool: 'auto'
  }

  render() {
    return (
      <StrictMode>
        <ReactSVGPanZoom
          width={500}
          height={500}
          tool={this.state.tool}
          value={this.state.value}
          onChangeTool={nextTool => this.setState({tool: nextTool})}
          onChangeValue={nextValue => this.setState({value: nextValue})}
        >
          <svg width={391} height={391} xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="200" height="200" fill="lime" strokeWidth="4" stroke="pink"/>
            <circle cx="125" cy="125" r="75" fill="orange"/>
            <polyline points="50,150 50,200 200,200 200,100" stroke="red" strokeWidth="4" fill="none"/>
            <line x1="50" y1="50" x2="200" y2="200" stroke="blue" strokeWidth="4"/>
          </svg>
        </ReactSVGPanZoom>
      </StrictMode>
    )
  }
}
