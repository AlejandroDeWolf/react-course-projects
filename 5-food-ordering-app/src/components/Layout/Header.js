import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../assets/header-image.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={headerImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
