import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  ); // props.children is a special property that allows us to output whatever we wrap between the opening and closing tag of the component
};

export default Card;
