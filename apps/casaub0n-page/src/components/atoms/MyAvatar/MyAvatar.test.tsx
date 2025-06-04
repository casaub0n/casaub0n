import { composeStories } from "@storybook/nextjs";
import { render } from "@testing-library/react";

import * as stories from "./MyAvatar.stories";

const { Default } = composeStories(stories);

describe("src/component/atoms/MyAvatar.test.tsx", () => {
  test("Atom", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
});
