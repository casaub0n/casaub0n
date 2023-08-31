import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./EmbedYoutube.stories";

const { Default } = composeStories(stories);

describe("src/components/organisms/embedYoutube/EmbedYoutube.test.tsx", () => {
  test("Organism", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
});
