import React, { useState } from "react";
import "./css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [expanded, setExpanded] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
  }

  function handleExpanded() {
    setExpanded((prevValue) => !prevValue);
  }

  return (
    <div className="new-expense">
      {!expanded && (
        <button type="button" onClick={handleExpanded}>
          Add New Expense
        </button>
      )}
      {expanded && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          onExpanded={handleExpanded}
        />
      )}
    </div>
  );
}

export default NewExpense;
