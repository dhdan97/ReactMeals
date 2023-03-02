import { useContext } from "react";
import CartIcon from "./CartIcon";

import HeaderCartButtonStyles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <button
      className={HeaderCartButtonStyles.button}
      onClick={props.onCartButtonClick}
    >
      <span className={HeaderCartButtonStyles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={HeaderCartButtonStyles.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
