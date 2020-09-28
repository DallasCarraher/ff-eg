import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("landing", () => {
  it("renders", () => {
    const { getByText } = render(<App />);
    const title = getByText(/Fast Food Conglomerate/i);
    expect(title).toBeInTheDocument();
  });

  it("can add items to cart", () => {
    const { getByRole, getByTestId } = render(<App />);
    const regularBurger = getByRole("radio", { name: "regular $ 3" });
    expect(regularBurger).toBeInTheDocument();
    fireEvent.click(regularBurger);
    const burgerAddToCart = getByTestId("Burger-addToCart");
    fireEvent.click(burgerAddToCart);
    console.log(getByTestId("cartCount"));
    expect(getByTestId("cartCount")).toContainHTML(1);
  });
});
