import MealItemStyles from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.mealPrice.toFixed(2)}`;
  return (
    <li className={MealItemStyles.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={MealItemStyles.description}>
          {props.mealDescription}
        </div>
        <div className={MealItemStyles.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
