import React, { useEffect, useState } from "react";
import "./App.css";
import { url } from "./constants";
import menuMock from "./__mocks__/menu.json";
import keygen from "./components/utils";
import { Cart, Menu } from "./components";

function App() {
  const [menu, setMenu] = useState([]);
  const [items, setItems] = useState([]);
  const [cart, toggleCart] = useState(false);

  function openCart() {
    toggleCart(true);
  }

  useEffect(() => {
    (async function getMenu() {
      // const res = await fetch(url);
      // console.log(await res.json());
      setMenu(menuMock.menu);
    })();
  }, []);

  function addToCart(item) {
    const updatedCart = [...items, item];
    setItems(updatedCart);
  }

  function sendToPayment(items) {
    console.table(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3
          style={{ flex: 1, cursor: "pointer" }}
          onClick={() => {
            toggleCart(false);
          }}
        >
          Fast Food Conglomerate
        </h3>
        <Cart items={items} openCart={openCart} />
      </header>
      {!cart ? (
        <div>
          <Menu menu={menu} cartHandler={addToCart} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5rem",
            }}
          >
            <h1>Your Order:</h1>
            {!items.length && <h3>Cart is Empty</h3>}
            {items.map((item) => (
              <div key={keygen()} style={{ display: "flex" }}>
                <h3>{item.item}</h3>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5rem",
            }}
          >
            <button
              onClick={() => {
                sendToPayment(items);
              }}
            >
              <h2>Complete Order</h2>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
