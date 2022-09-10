import React from "react";

import classes from "./Input.module.css";

// ref is used here to get access to the input element and its value
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

// we are using the spread operator to pass all the props to the input element

export default Input;
