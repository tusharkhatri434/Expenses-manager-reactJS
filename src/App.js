
import React,{ useState } from 'react';
import "./App.css";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Grocery",
    amount: 100,
    date: new Date(2023, 3, 30),
  },
  {
    id: "e5",
    title: "Phone EMI",
    amount: 340,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e7",
    title: "New Desk (Wooden)",
    amount: 200,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses]=useState(dummy_expenses);

  const addExpenseHandler = (expens) => {      
    setExpenses((prevExpenses) => {
      return [expens, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
