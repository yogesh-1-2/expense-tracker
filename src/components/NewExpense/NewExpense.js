import React from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense =(props) => {
    const submitDataHandler = (expense) =>{
        const expenseData={
            title: expense.title,
            amount:expense.amount,
            date: expense.date
        }
        props.onSaveData(expenseData);
    }
    return (
        <div>
            <ExpenseForm onSaveData= {submitDataHandler}/>
        </div>
    );
}
export default NewExpense;