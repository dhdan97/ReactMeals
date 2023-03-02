import Modal from "../UI/Modal";
import CartStyles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={CartStyles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li key={item.id}>{item.name}</li>; {/* CHANGE KEY HERE */}
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={CartStyles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={CartStyles.actions}>
        <button className={CartStyles["button--alt"]} onClick={props.onClick}>Close</button>
        <button className={CartStyles.button} onClick={props.onClick}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
