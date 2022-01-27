import React, { useState } from "react";
import "./css/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  const [expanded, setExpanded] = useState(false);

  function handleExpanded() {
    setExpanded((prevValue) => !prevValue);
  }

  if (props.filteredExpenses.length === 0) {
    return <h2 className="headingCenter">No expenses found.</h2>;
  } else {
    return (
      <div>
        {expanded && (
          <div>
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
            <div className="center">
              <button type="button" onClick={handleExpanded}>
                Hide
              </button>
            </div>
          </div>
        )}

        {!expanded && (
          <div className="center">
            <button type="button" onClick={handleExpanded}>
              See expenses
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default ExpensesList;
