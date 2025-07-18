import { EmbedYoutube } from "./EmbedYoutube";

import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta = {
  title: "molecules/EmbedYoutube",
  component: EmbedYoutube,
  tags: ["autodocs"],
} satisfies Meta<typeof EmbedYoutube>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
