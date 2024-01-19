import { StudyDataComponent } from "./StudyDataComponent";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "organisms/StudyData",
  component: StudyDataComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof StudyDataComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * This graph is creaded by recharts
 * [【React + Typescript】Rechartsのグラフをカスタマイズする](https://zenn.dev/acha_n/articles/how-to-customize-recharts)
 */
export const Default: Story = {
  args: {
    className: "study-data"
  }
};
