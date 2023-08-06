import { pageTitle } from "./index";

describe("src/components/meta", () => {
  test("Combine between the page title and the company name", () => {
    expect(pageTitle("トップページ")).toBe("トップページ | エーワンハウジング吉田");
  });
});
