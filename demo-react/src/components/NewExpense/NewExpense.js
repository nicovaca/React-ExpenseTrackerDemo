import useState from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";
function NewExpense(){
    return(
        <div className='new-expense'>
            <ExpenseForm></ExpenseForm>
        </div>
    )
}

export default NewExpense;