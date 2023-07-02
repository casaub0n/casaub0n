import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";

import * as stories from "./QuestionForm.stories";

const { Default } = composeStories(stories);

describe("src/components/organisms/QuestionForm/QuestionForm.test.tsx", () => {
  test("Organism", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganism();
  });
  // test("show error message when submit the empty value", async () => {
  //   const { container, getByRole } = render(<EmptyName />);
  //   await EmptyName.play({ canvasElement: container });
  //   await waitFor(() => {
  //     expect(getByRole("emailbox", { name: "email" })).toHaveErrorMessage(
  //       "Please enter your email",
  //     );
  //   });
  // });
  test.todo("show error message when submit the empty value");
});
