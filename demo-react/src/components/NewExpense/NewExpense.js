import {useState} from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
        //console.log(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Aggiungi Nuova Spesa</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                                       onCancel={stopEditingHandler}
            />
            }
        </div>
    )
}

export default NewExpense;