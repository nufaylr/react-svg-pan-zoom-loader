import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Welcome from "./Welcome";
import ReactSvgPanZoomLoaderStory from "./ReactSvgPanZoomLoaderStory";
import SvgLoaderSelectElementStory from "./SvgLoaderSelectElementStory";
import ReactSvgPanZoomWithXmlStory from "./ReactSvgPanZoomWithXmlStory";

const stories = storiesOf("React SVG Pan Zoom", module);

stories.addDecorator(withKnobs);
stories.add("README", () => <Welcome />);
stories.add("Viewer", () => <ReactSvgPanZoomLoaderStory />);
stories.add("Viewer SVG XML", () => <ReactSvgPanZoomWithXmlStory />);
stories.add("Proxy", () => <SvgLoaderSelectElementStory />);
