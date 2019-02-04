import {addDecorator, configure} from '@storybook/react';
import {withOptions} from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'React SVG Pan Zoom Loader',
    url: 'https://github.com/chrvadala/react-svg-pan-zoom-loader',
    // addonPanelInRight: window.innerWidth > 1100,
  })
);

configure(() => require('./stories'), module);
