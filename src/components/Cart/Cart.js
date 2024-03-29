import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import CartStyles from "./Cart.module.css";

import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={CartStyles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={CartStyles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={CartStyles.actions}>
        <button className={CartStyles["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        {hasItems && (
          <button className={CartStyles.button} onClick={props.onClick}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
