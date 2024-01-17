import { StudyDataComponent } from "./StudyDataComponent";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "organisms/StudyData",
  component: StudyDataComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof StudyDataComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "study-data"
  }
};
