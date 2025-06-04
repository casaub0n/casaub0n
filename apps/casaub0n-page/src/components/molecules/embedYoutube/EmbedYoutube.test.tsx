import { composeStories } from "@storybook/nextjs";
import { render } from "@testing-library/react";

import * as stories from "./EmbedYoutube.stories";

const { Default } = composeStories(stories);

describe("src/components/molecules/embedYoutube/EmbedYoutube.test.tsx", () => {
  test("Molecule", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });
});
