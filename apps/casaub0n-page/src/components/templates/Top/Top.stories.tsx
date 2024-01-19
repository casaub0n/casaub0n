import { Top } from "./Top";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "templates/Top",
  component: Top,
  tags: ["autodocs"],
} satisfies Meta<typeof Top>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * This component is Top page of my web site
 */
export const Default: Story = {
  name: "Default Top",
  args: {
    className: "main-component"
  }
};
