import { render } from "@testing-library/react";
import React from "react";

import RootLayout from "./RootLayout";

describe("RootLayout", () => {
  test("should render", () => {
    const content = render(
      <RootLayout>
        <main>Main content</main>
      </RootLayout>
    );
    expect(content.getByRole("heading", { level: 1 }).textContent).toEqual(
      "Main header"
    );
    expect(content.getByText("Main content")).toBeTruthy();
  });
});
