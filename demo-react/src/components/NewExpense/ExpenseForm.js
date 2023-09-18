import './ExpenseForm.css';
import {useState} from "react";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /*const titleChangeHandler = (event) => {
         setEnteredTitle(event.target.value);
     };
     const amountChangeHandler = (event) => {
         setEnteredAmount(event.target.value);
     };const dateChangeHandler = (event) => {
         setEnteredDate(event.target.value);
     };*/

    const inputChangeHandler = (identifier, value) => {
        switch (identifier) {
            case 'title':
                setEnteredTitle(value);
                break;
            case 'amount':
                setEnteredAmount(value);
                break;
            case 'date':
                setEnteredDate(value);
                break;
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //creo un nuovo oggetto che contiene i dati inseriti dal form, ovvero un nuovo oggetto expense
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        //lancio l'evento, la funzione creata nel component parent(NewExpense) per potergli passare i dati del form
        props.onSaveExpenseData(expenseData);
        //pulisco il form dopo il submit
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                           value={enteredTitle}
                           onChange={(event) => inputChangeHandler('title', event.target.value)}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                           min='0.01'
                           step='0.01'
                           value={enteredAmount}
                           onChange={(event) => inputChangeHandler('amount', event.target.value)}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                           min='2019-01-01'
                           max='2022-12-31'
                           value={enteredDate}
                           onChange={(event) => inputChangeHandler('date', event.target.value)}
                    />
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancella</button>
                    <button type='submit'>Aggiungi nuova spesa</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;