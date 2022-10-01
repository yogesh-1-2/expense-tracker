import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) =>{
    const [enteredTitle, changeEnteredTitle] =useState("");
    const [enteredAmount, changeEnteredAmount] = useState(0);
    const [enteredDate, changeEnteredDate] = useState("1/1/1999");
    const changeTitle = (event) => {
        changeEnteredTitle(event.target.value);
    }
    const changeAmount = (event) => {
        changeEnteredAmount(event.target.value);
    }
    const changeDate = (event) => {
        changeEnteredDate(event.target.value);
    }
    const submitExpense = (event) => {
        event.preventDefault();
        const ExpenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        changeEnteredAmount('');
        changeEnteredDate('');
        changeEnteredTitle('');
        props.onSaveData(ExpenseData);
    }
    return (
        <div className='form-case'>
        <div className="form-control">
            <form className='form-block' onSubmit={submitExpense}>
                <div>
                <label className='input-label title'>Title</label>
                <input className='input-field title' value={enteredTitle} type='text' onChange={changeTitle}/>
                </div>
                <div>
                <label className='input-label amount'>Amount</label>
                <input className='input-field amount' value={enteredAmount} type='number' step= '0.1' onChange={changeAmount}/>
                </div>
                <div>
                <label className='input-label date'>Title</label>
                <input className='input-field date' type='date' value={enteredDate} min='2019-01-01' max='2022-12-30' onChange={changeDate}/>
                </div>
                <div className='input-btn'>
                <input className='form-button' type='submit'/>
                </div>
            </form>
        </div>
        </div>
    );
}
export default ExpenseForm;