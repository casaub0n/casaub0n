import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./Top.stories";

const { Default } = composeStories(stories);

describe("src/component/templates/TopText.test.tsx", () => {
  test("Template", () => {
    const { container } = render(<Default />);
    expect(container).toBeTemplate();
  });
});
