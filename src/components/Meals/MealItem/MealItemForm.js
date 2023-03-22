import { useRef, useState } from "react";

import Input from "../../UI/Input";
import Modal from "../../UI/Modal";

import MealItemFormStyles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);

  const changeIsValid = () => {
    setIsValid(!isValid);
  };

  const amountInputRef = useRef();

  const mealItemSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={MealItemFormStyles.form} onSubmit={mealItemSubmitHandler}>
      {!isValid && (
        <Modal onClick={changeIsValid}>
          <div>
            <button onClick={changeIsValid}>Close</button>
          </div>
        </Modal>
      )}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
