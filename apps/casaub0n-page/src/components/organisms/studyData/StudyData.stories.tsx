import { StudyDataComponent } from "./StudyDataComponent";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "organisms/StudyData",
  component: StudyDataComponent,
} satisfies Meta<typeof StudyDataComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
