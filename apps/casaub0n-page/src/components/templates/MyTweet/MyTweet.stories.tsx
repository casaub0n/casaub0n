import { MyTweet } from "./MyTweet";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "templates/MyTweet",
  component: MyTweet,
  parameters: {
    docs: {
      description: {
        component: "my tweet",
      },
    },
  },
} satisfies Meta<typeof MyTweet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default MyTweet",
};
