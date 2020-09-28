import React, { useState } from "react";
import keygen from "./utils";
import { burger, soda, fries } from "./img";

export default function Menu({ menu, cartHandler }) {
  const [size, setSize] = useState(0);
  const [chosenItem, setChosenItem] = useState(null);
  const [price, setPrice] = useState(0);

  function chooseSize(value, itemType, newPrice) {
    setChosenItem(itemType);
    setSize(value);
    setPrice(newPrice);
  }

  function itemName(item) {
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
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {menu.map((item) => {
        const name = itemName(item.item);
        return (
          <form key={keygen()}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "15rem",
              }}
            >
              <h3 style={{ textAlign: "center" }}>{item.item}</h3>
              <img
                src={name}
                alt="food-item"
                style={{ height: "10rem", maxWidth: "20rem" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem",
                }}
              >
                {item.options.map((option) => {
                  const key = keygen();
                  return (
                    <div
                      key={key}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        margin: "10px",
                      }}
                    >
                      <input
                        type="radio"
                        id={"size" + key}
                        value={option.size}
                        checked={
                          size === option.size && item.item === chosenItem
                        }
                        onChange={(e) => {
                          chooseSize(e.target.value, item.item, option.price);
                        }}
                      />
                      <label htmlFor={"size" + key}>
                        {option.size} ${option.price}
                      </label>
                    </div>
                  );
                })}
              </div>
              <button
                style={{ margin: "3rem" }}
                onClick={(e) => {
                  e.preventDefault();
                  cartHandler(item, size, price);
                }}
                disabled={!size || item.item !== chosenItem}
              >
                <h2>Add to Cart</h2>
              </button>
            </div>
          </form>
        );
      })}
    </div>
  );
}
