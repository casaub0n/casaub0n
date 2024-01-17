import { MyTweet } from "./MyTweet";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "organisms/MyTweet",
  component: MyTweet,
  tags: ["autodocs"],
} satisfies Meta<typeof MyTweet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default MyTweet",
};
