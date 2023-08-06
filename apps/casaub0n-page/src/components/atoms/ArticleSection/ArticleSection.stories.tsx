import { ArticleSection } from "./ArticleSection";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Article Section",
  component: ArticleSection,
  parameters: {
    docs: {
      description: {
        component: "section tag, it is defined h2, h3 and list",
      },
    },
  },
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
