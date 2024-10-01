import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/components/Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    helperText: { control: "text" },
    maxLength: { control: "number" },
  },
  args: {
    color: "black",
    size: "big",
    placeholder: "input",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const black: Story = {
  args: {
    color: "black",
    placeholder: "Black input",
  },
};

export const gray2: Story = {
  args: {
    color: "gray2",
    placeholder: "Gray-2 input",
  },
};

export const success: Story = {
  args: {
    color: "success",
    placeholder: "Success input",
  },
};

export const error: Story = {
  args: {
    color: "error",
    placeholder: "Error input",
  },
};

export const helperText: Story = {
  args: {
    placeholder: "input",
    helperText: "helper text",
  },
};

export const errorHelperText: Story = {
  args: {
    color: "error",
    placeHolder: "error input",
    helperText: "error helperText",
  },
};

export const Big: Story = {
  args: {
    size: "big",
    placeholder: "Big input",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Small input",
  },
};
