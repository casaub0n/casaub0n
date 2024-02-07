import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as stories from "./EmptyRoomImage.stories";

const { Default } = composeStories(stories);

describe("src/component/atoms/EmptyRoomImage.test.tsx", () => {
  test("Atom", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  })
  test("Show Image", () => {
    render(<Default />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  })
});
