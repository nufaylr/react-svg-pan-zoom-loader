import React, {Component, StrictMode} from 'react'
import {ReactSVGPanZoom} from 'react-svg-pan-zoom'
import {ReactSvgPanZoomLoader} from '../../src'
import {text} from '@storybook/addon-knobs'

const label = 'SVG file src path'
const defaultValue = "./test-digram.svg"

export default class ReactSvgPanZoomLoaderStory extends Component {
  state = {
    value: {},
    tool: 'auto'
  }

  render() {
    return (
      <StrictMode>
        <ReactSvgPanZoomLoader src={text(label, defaultValue)} render= {(content) => (
            <ReactSVGPanZoom
              width={500}
              height={500}
              tool={this.state.tool}
              value={this.state.value}
              onChangeTool={nextTool => this.setState({tool: nextTool})}
              onChangeValue={nextValue => this.setState({value: nextValue})}
            >
                <svg width={500} height={500} >
                    {content}
                </svg>  
            </ReactSVGPanZoom>
        )}/>
      </StrictMode>
    )
  }
}
