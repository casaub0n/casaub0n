import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./Main.stories";

const { Default } = composeStories(stories);

describe("src/components/molecules/main/Main.test.tsx", () => {
  test("Organism", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
});
