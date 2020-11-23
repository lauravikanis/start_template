import { getByText, render } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders storybook react link", () => {
  render(<App />);
  const linkElement = getByText(/To Storybook/i);
  expect(linkElement).toBeInTheDocument();
});
