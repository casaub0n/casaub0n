import { NavBar } from "./NavBar";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "organisms/navigation bar",
  component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default navbar",
  tags: ["navbar"],
};
