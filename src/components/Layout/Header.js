import { Fragment } from "react";

import HeaderStyles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={HeaderStyles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartButtonClick={props.onCartButtonClick} />
      </header>
      <div className={HeaderStyles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
