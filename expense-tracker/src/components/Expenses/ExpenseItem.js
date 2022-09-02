import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// parameter which is an object that holds all the received attributes as props
// the keys are the attribute names defined in App.js e.g. title, amount, date
const ExpenseItem = (props) => {
  // the name behind props needs to be the same as the defined attriibute
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
