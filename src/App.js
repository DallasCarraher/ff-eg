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
  const [total, setTotal] = useState(0);

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

  function addToCart(item, size, price) {
    setTotal(total + price);
    const newItem = { id: keygen(), name: item.item, size, price };
    const updatedCart = [...items, newItem];
    setItems(updatedCart);
  }

  function sendToPayment(items) {
    console.table(items);
    setTotal(0);
    setItems([]);
    toggleCart(false);
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
                <button
                  style={{
                    margin: "1rem",
                    border: "none",
                    borderRadius: 10,
                    outline: "none",
                  }}
                  onClick={() => {
                    let newItems = items.filter(
                      (foodItem) => foodItem.id !== item.id
                    );
                    setItems(newItems);
                    let newTotal = 0;
                    newItems.forEach((item) => {
                      newTotal += item.price;
                    });
                    setTotal(newTotal);
                  }}
                >
                  X
                </button>
                <h3>
                  {item.size} {item.name} - ${item.price}
                </h3>
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
            <h2>Total: ${total}</h2>
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
