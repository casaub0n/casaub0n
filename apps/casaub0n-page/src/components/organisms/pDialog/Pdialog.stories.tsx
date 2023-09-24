import { Pdialog } from "./Pdialog";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "organisms/pDialog",
  component: Pdialog,
  parameters: {
    docs: {
      description: {
        component: "Pdialog",
      },
    },
  },
} satisfies Meta<typeof Pdialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Pdialog",
};
