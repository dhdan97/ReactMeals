import { useContext } from "react";

import MealItemStyles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.mealPrice.toFixed(2)}`;

  const onAddToCart = (enteredAmountNumber) => {

    cartCtx.addItem({
      id: props.id,
      name: props.mealName,
      amount: enteredAmountNumber,
      price: props.mealPrice,
    });
  };

  return (
    <li className={MealItemStyles.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={MealItemStyles.description}>
          {props.mealDescription}
        </div>
        <div className={MealItemStyles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCart} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
