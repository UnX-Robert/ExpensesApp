import React from "react";
import Expenses from "./components/Expenses/Expenses";
import expenses from "./expenses.js";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
