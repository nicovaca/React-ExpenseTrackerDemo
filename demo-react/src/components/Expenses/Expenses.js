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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map(p => <ExpenseItem title={p.title} amount={p.amount} date={p.date}></ExpenseItem>)}
            </Card>
        </div>
    );
}

export default Expenses;
