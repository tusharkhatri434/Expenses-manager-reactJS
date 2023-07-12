import React ,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'


const NewExpense = (props) => {
        const [falseValue, trueValue] = useState(false);
     const saveExpenseDataHandler=(enteredExpenseData)=>{
            const expenseData = {
                ...enteredExpenseData,
                id:Math.random().toString()
            };
        // console.log("In NewExpense.js");
        props.onAddExpense(expenseData);
         trueValue(false);

     };
     const changeStateTrue = () => {
       trueValue(true);
     };
     const ChangeStateByCancelFalse = () => {
       trueValue(false);
     }; 

    return(
        <div className='new-expense'>
           {!falseValue && (<button onClick={changeStateTrue}>Add New Expense</button> )}
            {falseValue && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={ChangeStateByCancelFalse} />)}
        </div>
    );
}
export default NewExpense;