import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";

import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const changeCartVisibility = () => {
    setCartVisibility(!cartVisibility);
  };

  return (
    <CartProvider>
      {cartVisibility && <Cart onClick={changeCartVisibility} />}
      <Header onCartButtonClick={changeCartVisibility} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
