import React, { useEffect, useState } from "react";
import "./App.css";
import { url } from "./constants";
import menuMock from "./__mocks__/menu.json";
import { Cart, Menu } from "./components";

function App() {
  const [menu, setMenu] = useState([]);
  const [items, setItems] = useState([]);

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

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ flex: 1 }}>Fast Food Conglomerate</h3>
        <Cart items={items} />
      </header>
      <Menu menu={menu} cartHandler={addToCart} />
    </div>
  );
}

export default App;
