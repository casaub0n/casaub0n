import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import { atomicElementName } from "../utils";

import * as stories from "./Header.stories";
import { componentPath } from "./utils";

const { Default } = composeStories(stories);

describe(`${componentPath}Header.test.tsx`, () => {
  test(atomicElementName, () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test("[role=banner]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("banner")).toBeInTheDocument();
  });
});
