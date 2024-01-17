import { ArticleSection } from "./ArticleSection";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Article Section",
  component: ArticleSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h2>Article Example: 記事画面</h2>
        <p></p>
      </>
    ),
  },
};
