import { Button } from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ## TODO
 *
 * default color only works, others is not...
 */
export const Default: Story = {
  name: "Default Button",
  args: {
    visualVariant: "primary",
    sizeVariant: "large",
    disabled: false,
    className: "Sample-button",
    children: "Sample"
  }
};

export const PrimaryButton: Story = {
  args: {
    visualVariant: "primary",
    sizeVariant: "medium",
    disabled: false,
    className: "Sample-button",
    children: "Sample",
  }
}

export const SecondaryButton: Story = {
  args: {
    visualVariant: "secondary",
    sizeVariant: "medium",
    disabled: false,
    className: "Sample-button",
    children: "Sample",
  },
};

export const AlertButton: Story = {
  args: {
    visualVariant: "alert",
    sizeVariant: "medium",
    disabled: false,
    className: "sample-button",
    children: "Sample"
  }
}
