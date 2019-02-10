import React from 'react';

import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import Welcome from './Welcome';
import ReactSvgPanZoomLoaderStory from './ReactSvgPanZoomLoaderStory';
import SvgLoaderSelectElementStory from './SvgLoaderSelectElementStory';

storiesOf('React SVG Pan Zoom', module)
  .addDecorator(withKnobs)
  .add('README', () => <Welcome/>)
  .add('Viewer', () => <ReactSvgPanZoomLoaderStory/>)
  .add('Proxy', () => <SvgLoaderSelectElementStory/>)
