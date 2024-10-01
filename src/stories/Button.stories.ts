import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "@/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    text: { control: "text" },
    border: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { color: "primary", onClick: fn(), size: "big" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    text: "Primary button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    text: "Secondary button",
  },
};

export const gray2: Story = {
  args: {
    color: "gray2",
    text: "Gray-2 button",
  },
};

export const gray3: Story = {
  args: {
    color: "gray3",
    text: "Gray-3 button",
  },
};

export const black: Story = {
  args: {
    color: "black",
    text: "Black button",
  },
};

export const sm: Story = {
  args: {
    size: "sm",
    text: "sm button",
  },
};

export const md: Story = {
  args: {
    size: "md",
    text: "md button",
  },
};

export const bg: Story = {
  args: {
    size: "bg",
    text: "bg button",
  },
};

export const extra: Story = {
  args: {
    size: "extra",
    text: "Extra button",
  },
};

export const border: Story = {
  args: {
    color: "primary",
    border: true,
    text: "Border button",
  },
};

export const NoneBorder: Story = {
  args: {
    color: "primary",
    border: false,
    text: "Border button",
  },
};
