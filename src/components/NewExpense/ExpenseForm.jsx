import React, { useState } from "react";
import "./css/ExpenseForm.css";

function ExpenseForm(props) {
  /*
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  */

  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function handleDataChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevData) => {
      if (name === "title") {
        return {
          ...prevData,
          title: value,
        };
      } else if (name === "amount") {
        return {
          ...prevData,
          amount: value,
        };
      } else if (name === "date") {
        return {
          ...prevData,
          date: value,
        };
      }
    });
  }

  function submitHandler(event) {
    const expenseData = {
      title: data.title,
      amount: data.amount,
      date: new Date(data.date),
    };

    props.onSaveExpenseDate(expenseData);

    setData({ title: "", amount: "", date: "" });

    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            value={data.title}
            onChange={handleDataChange}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            value={data.amount}
            onChange={handleDataChange}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            value={data.date}
            onChange={handleDataChange}
            type="date"
            min="2022-01-01"
            step="2025-12-31"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
