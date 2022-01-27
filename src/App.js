import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expenses from "./expenses.js";

function App() {
  const [expensesData, setExpensesData] = useState(expenses);

  function addExpenseHandler(expense) {
    setExpensesData((prevExpense) => {
      return [
        {
          id: `e${expensesData.length + 1}${expense.title}`,
          title: expense.title,
          amount: expense.amount,
          date: expense.date,
        },
        ...prevExpense,
      ];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expensesData} />
    </div>
  );
}

export default App;
