import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import { organism, organismsPath } from "../tests/organisms";

import * as stories from "./Header.stories";

const { Default } = composeStories(stories);

describe(`${organismsPath}header/Header.test.tsx`, () => {
  test(organism, () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("[role=banner]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("banner")).toBeInTheDocument();
  });
});
