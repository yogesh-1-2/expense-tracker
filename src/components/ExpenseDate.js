import "./ExpenseDate.css"
const ExpenseDate=(props)=>{
    const month=props.date.toLocaleString('default' , {month : 'long'});
    const day=props.date.getUTCDate();
    const year=props.date.getUTCFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}
export default ExpenseDate;