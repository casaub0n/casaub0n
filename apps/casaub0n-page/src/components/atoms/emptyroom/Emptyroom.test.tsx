import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./EmptyRoom.stories";

const { Default } = composeStories(stories);

describe("src/component/atoms/EmptyRoom.test.tsx", () => {
  test("Atom", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  })
});
