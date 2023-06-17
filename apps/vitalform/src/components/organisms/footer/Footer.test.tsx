import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./Footer.stories";

const { Default } = composeStories(stories);

describe("src/components/organisms/footer/Footer.test.tsx", () => {
  test("Organism", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
});
