import { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";

import HeaderCartButtonStyles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnClasses = `${HeaderCartButtonStyles.button} ${
    btnIsHighlighted ? HeaderCartButtonStyles.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onCartButtonClick}>
      <span className={HeaderCartButtonStyles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={HeaderCartButtonStyles.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
