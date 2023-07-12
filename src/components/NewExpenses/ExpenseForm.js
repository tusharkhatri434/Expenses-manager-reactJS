import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [usertitle, setTitle] = useState("");
  const [useramount, setAmount] = useState("");
  const [userdate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setDate(event.target.value);
  };

  const submitHandler=(event)=>{

      event.preventDefault();

      const expenseData = {
        title : usertitle,
        amount : useramount,
        date: new Date(userdate),

      };

     props.onSaveExpenseData(expenseData);
      
      setTitle('');
      setAmount('');
      setDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="'text" value={usertitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={useramount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={userdate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
