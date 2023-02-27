import CartIcon from "./CartIcon";

import HeaderCartButtonStyles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={HeaderCartButtonStyles.button}>
      <span className={HeaderCartButtonStyles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={HeaderCartButtonStyles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
