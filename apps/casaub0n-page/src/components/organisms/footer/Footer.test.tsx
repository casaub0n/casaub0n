import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import { atomicElementName } from "../utils";

import * as stories from "./Footer.stories";
import { componentPath } from "./utils";

const { Default } = composeStories(stories);

describe(`${componentPath}Footer.test.tsx`, () => {
  test(atomicElementName, () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
});
