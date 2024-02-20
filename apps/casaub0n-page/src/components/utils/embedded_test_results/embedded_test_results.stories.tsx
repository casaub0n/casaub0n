import type { Meta, StoryObj } from "@storybook/react";

const embeddedTestResults = () => (
  <iframe src="https://casaub0n.github.io/casaub0n/__reports__/jest.html" allow="fullscreen" height={800} width={800} />
);

const meta = {
  title: "atoms/tests results",
  component: embeddedTestResults,
  tags: ["autodocs"],
} satisfies Meta<typeof embeddedTestResults>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * https://casaub0n.github.io/casaub0n/__reports__/jest.html
 */
export const Default: Story = {}
