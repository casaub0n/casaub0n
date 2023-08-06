import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./EmptyRoom.stories";

const { Default } = composeStories(stories);

describe("src/component/molecules/EmptyRoom.test.tsx", () => {
  test("Molecule", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  })
});