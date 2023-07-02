import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./QuestionForm.stories";

const { Default } = composeStories(stories);

describe("src/components/organisms/QuestionForm/QuestionForm.test.tsx", () => {
  test("Organism", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  test.todo("show the error message for empty");
});
