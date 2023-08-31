import { EmbedYoutube } from "./EmbedYoutube";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "molecules/EmbedYoutube",
  component: EmbedYoutube,
} satisfies Meta<typeof EmbedYoutube>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
