import React, { useState, ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ReactSVGPanZoom, Tool, Value } from "react-svg-pan-zoom";
import { ReactSvgPanZoomLoader, SvgLoaderSelectElement } from "../src";
import { action } from "@storybook/addon-actions";

import testdigram from "./assets/test-digram.svg";

const RenderReactSVGPanZoom = (content: ReactNode) => {
  const [tool, setTool] = useState<Tool>("auto");
  const [value, setValue] = useState<Value | null>(null);
  return (
    <ReactSVGPanZoom
      width={500}
      height={500}
      tool={tool}
      value={value}
      onChangeTool={(nextTool) => setTool(nextTool)}
      onChangeValue={(nextValue) => setValue(nextValue)}
    >
      <svg width={500} height={500}>
        {content}
      </svg>
    </ReactSVGPanZoom>
  );
};

const Proxy = () => {
  return (
    <>
      <SvgLoaderSelectElement
        selector={"#green-circle"}
        onClick={(e) => action("#green-circle")(e)}
      />
      <SvgLoaderSelectElement
        selector="#tree"
        onClick={(e) => action("#tree")(e)}
      />
    </>
  );
};

const meta = {
  title: "Example/Svg Loader",
  component: ReactSvgPanZoomLoader,
  argTypes: {
    src: {
      defaultValue: testdigram,
      control: "file",
    },
    render: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ReactSvgPanZoomLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: testdigram,
    render: RenderReactSVGPanZoom,
  },
};

export const WithSelectElement: Story = {
  args: {
    src: testdigram,
    proxy: <Proxy />,
    render: RenderReactSVGPanZoom,
  },
};
