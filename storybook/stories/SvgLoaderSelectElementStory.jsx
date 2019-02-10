import React, {Component, StrictMode} from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom'
import {ReactSvgPanZoomLoader, SvgLoaderSelectElement} from '../../src'
import {text} from '@storybook/addon-knobs'
import {decorate} from '@storybook/addon-actions'

const srcLabel = 'SVG file src path'
const srcDefaultValue = "./test-digram.svg"

const selectorLabel = 'Selector Element DOM id'
const selectorDefaultValue = "#green-circle"

// Action
const proxyArg = decorate([args => args.slice(0, 1)])

export default class SvgLoaderSelectElementStory extends Component {
  state = {
    value: {},
    tool: 'auto'
  }

  render() {
    return (
      <StrictMode>
        <ReactSvgPanZoomLoader src={text(srcLabel, srcDefaultValue)} proxy = {
          <>
            <SvgLoaderSelectElement selector={text(selectorLabel, selectorDefaultValue)} onClick={proxyArg.action(`${selectorDefaultValue}`)}/>
            <SvgLoaderSelectElement selector="#tree" onClick={proxyArg.action('#tree')} /> 
          </>
          } render= {(content) => (
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
