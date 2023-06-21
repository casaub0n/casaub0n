import { QuestionForm } from "./QuestionForm";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "organisms/question form",
  component: QuestionForm,
} satisfies Meta<typeof QuestionForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default QuestionForm",
  tags: ["navbar"],
};
