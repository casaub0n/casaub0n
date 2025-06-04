import { TweetSkeleton } from "react-tweet";

import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "atoms/Tweet Skelton",
  component: TweetSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof TweetSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "TweetSkelton by react-tweet",
};
