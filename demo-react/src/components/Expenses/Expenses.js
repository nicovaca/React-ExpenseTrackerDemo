import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

//sintassi alternativa per scrivere le funzioni (componenti) usando le arrow function
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>Nessuna spesa trovata.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(p => <ExpenseItem key={p.id} title={p.title} amount={p.amount}
                                                                 date={p.date}></ExpenseItem>)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
