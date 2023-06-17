import { Layout } from "./Layout";

import type { Meta, StoryObj } from "@storybook/react";


const meta = {
  title: "layout/layout",
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: "header and footer",
      },
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

const rElement = (
  <main>
    <h1>Element title</h1>
    <p>element text</p>
  </main>
);

export const Default: Story = {
  name: "layout for Next.js",
  args: {
    children: rElement,
  },
};
