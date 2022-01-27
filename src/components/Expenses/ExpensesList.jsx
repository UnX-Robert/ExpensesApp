import React from "react";
import "./css/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h2>No expenses found.</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.amount}
          />
        ))}
      </ul>
    );
  }
}
export default ExpensesList;
