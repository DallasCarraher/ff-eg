import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("landing", () => {
  test("renders", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Fast Food Conglomerate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
