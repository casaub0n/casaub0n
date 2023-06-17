import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "./Layout.stories";

const { Default } = composeStories(stories);

describe("src/components/layouts/Layout.test.tsx", () => {
  test("landmark", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("banner")).toBeInTheDocument();
    // complementary isn't here, because aside that's like side bar isn't here.
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });
});
