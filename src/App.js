import React, {useState} from 'react';
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css';
const App=()=>{
  const expenses = [
    {title: "Car insurace" , date: new Date(2001,6,15) , amount : 234 },
    {title: "Bike brought" , date: new Date(2002,6,15) , amount : 2134 },
    {title: "marraige" , date: new Date(2024,11,21) , amount : 123234 },
    {title: "Honeymoon" , date: new Date(2024,12,12) , amount : 23654 }
  ];
  const [expenseslist,addExpenses] = useState(expenses);
  const SubmitHandler=(expense)=>{
    const expenseData = {
      title: expense.title,
      amount:expense.amount,
      date: expense.date
    } 
    addExpenses((prevState)=>{
      return [expenseData, ...prevState]
    });
  }
  return (
      <div>
        <NewExpense onSaveData={SubmitHandler}/>
        <div className="container">
        {expenseslist.length === 0 
          ? <p> No expenses found</p> 
          : expenseslist.map( (expense,i)=> {return <ExpenseItem key={i} title= {expense.title}  amount= {expense.amount}  date={expense.date} />}
        )}
        </div>
      </div>
  )
}
export default App;