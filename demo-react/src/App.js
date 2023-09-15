import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
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
    ];


    return (
        <div>
            <NewExpense />
            <Expenses items={expenses} />
            {/*{expenses.map(p => <ExpenseItem title={p.title} amount={p.amount} date={p.date}></ExpenseItem>)}*/}
        </div>
    );
}

export default App;
