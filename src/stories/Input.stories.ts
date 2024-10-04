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
    type: "text",
    color: "black",
    size: "big",
    placeholder: "input",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    color: "black",
    placeholder: "Black input",
  },
};

export const Gray2: Story = {
  args: {
    color: "gray2",
    placeholder: "Gray-2 input",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    placeholder: "Success input",
  },
};

export const Error: Story = {
  args: {
    color: "error",
    placeholder: "Error input",
  },
};

export const HelperText: Story = {
  args: {
    placeholder: "input",
    helperText: "helper text",
  },
};

export const ErrorHelperText: Story = {
  args: {
    color: "error",
    placeholder: "Error input",
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
