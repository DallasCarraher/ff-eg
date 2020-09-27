import React from "react";
import keygen from "./utils";
import { burger, soda, fries } from "./img";

export default function Menu({ menu, cartHandler }) {
  const itemName = (item) => {
    switch (item) {
      case "Burger":
        return burger;
      case "Soda":
        return soda;
      case "Fries":
        return fries;
      default:
        return fries;
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {menu.map((item) => {
        const name = itemName(item.item);
        return (
          <div
            key={keygen()}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "20rem",
            }}
          >
            <h3 style={{ textAlign: "center" }}>{item.item}</h3>
            <img
              src={name}
              alt="food-item"
              style={{ height: "10rem", maxWidth: "20rem" }}
            />
            <button
              style={{ margin: "3rem" }}
              onClick={() => {
                cartHandler(item);
              }}
            >
              <h2>Add to Cart</h2>
            </button>
          </div>
        );
      })}
    </div>
  );
}
