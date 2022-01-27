import React from "react";
import "./css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
