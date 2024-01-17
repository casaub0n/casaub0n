import { MyAvatar } from "./MyAvatar";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/MyAvatar",
  component: MyAvatar,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "show image icon"
  }
} satisfies Meta<typeof MyAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * CAUTION: Currently jsdoc annotation is not showed the document in Storybook
 * Use `react-docgen` to show annotation, follow below issue:
 * https://github.com/storybookjs/storybook/issues/21192#issuecomment-1439273822
 * The way how to use `react-docgen`
 * https://zenn.dev/sa2knight/articles/storybook_and_react_docgen#storybook-%E3%81%A7%E3%81%AE%E4%BD%BF%E7%94%A8%E4%BE%8B
 */
export const Default: Story = {
  name: "default my avatar",
  args: {
    className: "avatar-img"
  }
};
