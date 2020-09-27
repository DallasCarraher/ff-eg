import React from "react";
import cartIcon from "./img/shopping-cart.png";

export default function Cart({ items }) {
  const empty = items.length === 0;
  return (
    <div style={{ display: "flex" }}>
      <p style={{ fontSize: "20px", fontWeight: "bold", margin: "1rem" }}>
        {empty && "cart empty"}
        {!empty && items.length}
      </p>
      <img
        src={cartIcon}
        alt="shopping-cart"
        style={{ height: "3rem", marginRight: "1rem" }}
      />
    </div>
  );
}
