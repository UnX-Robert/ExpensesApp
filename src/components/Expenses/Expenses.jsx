import React, { useState } from "react";
import "./css/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterOption, setFilterOption] = useState("2025");

  const handleFilter = (data) => setFilterOption(data);

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterOption
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterOption} onFilter={handleFilter} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
