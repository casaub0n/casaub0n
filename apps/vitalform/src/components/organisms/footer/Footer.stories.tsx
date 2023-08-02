import { Footer } from "./Footer";
import { componentStoryName } from "./utils";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: componentStoryName,
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: "company info",
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default footer",
  tags: ["footer"],
};
