import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: 'Assicurazione Auto',
        amount: 564.56,
        date: new Date(2021, 3, 22)
    },
    {
        id: 'e2',
        title: 'Bolletta Luce',
        amount: 215.23,
        date: new Date(2022, 6, 12)
    },
    {
        id: 'e3',
        title: 'Bolletta Gas',
        amount: 64.56,
        date: new Date(2023, 10, 2)
    },
    {
        id: 'e4',
        title: 'Spese Condominiali',
        amount: 100,
        date: new Date(2022, 5, 18)
    },
    {
        id: 'e5',
        title: 'Retta Università',
        amount: 235.56,
        date: new Date(2020, 9, 9)
    },
];

function App() {
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

    const addExpenseHandler = expense => {
        //console.log(expense);
        setExpenses((prevExpenses) => {
           return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses} />
            {/*{expenses.map(p => <ExpenseItem title={p.title} amount={p.amount} date={p.date}></ExpenseItem>)}*/}
        </div>
    );
}

export default App;
