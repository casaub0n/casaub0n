import "../../vitalform/src/app/globals.css";
import { css } from "../styled-system/css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // NOTE: this decorator looks like page.tsx that is index for page. but panda css's style doesn't apply to my stories.
  decorators: [
    (Story) => (
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
