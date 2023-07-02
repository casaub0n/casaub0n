import { userEvent, within } from "@storybook/testing-library";

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
  args: {
    "aria-labelledby": "quizeTitle",
  },
  parameters: {
    describe: "form by using Radix UI",
  },
};

export const EmptyName: Story = {
  name: "empty name",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Post question" }));
  },
};
