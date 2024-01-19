import { Input } from "./Input";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Input",
  args: {
    className: "input"
  }
};
