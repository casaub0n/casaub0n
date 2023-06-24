import { withTests } from "@storybook/addon-jest";

import results from "../../../../.jest-test-results.json";

import { Input } from "./Input";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "refforward input",
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Input",
  tags: ["autodocs"],
  args: {
    defaultValue: "email",
  },
  decorators: [withTests({ results })],
};
