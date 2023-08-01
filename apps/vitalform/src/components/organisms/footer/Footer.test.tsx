import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import { organism, organismsPath } from "../tests/organisms";

import * as stories from "./Footer.stories";

const { Default } = composeStories(stories);

describe(`${organismsPath}/footer/Footer.test.tsx`, () => {
  test(organism, () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
});
