import { FamilyStructure } from "./FamilyStructure";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "organisms/FamilyStructure",
  component: FamilyStructure,
} satisfies Meta<typeof FamilyStructure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
