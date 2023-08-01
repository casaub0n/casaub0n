import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import { organism, organismsPath } from "../tests/organisms";

import * as stories from "./NavBar.stories";

const { Default } = composeStories(stories);

describe(`${organismsPath}navbar/NavBar.test.tsx`, () => {
  test(organism, () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("[role=navigation]を保持している", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("navigation", { name: "メインナビゲーション" })).toBeInTheDocument();
  });
});
