import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

//sintassi alternativa per scrivere le funzioni (componenti) usando le arrow function
const Expenses = (props) => {

    return (
        <Card className="expenses">
            {props.items.map(p => <ExpenseItem title={p.title} amount={p.amount} date={p.date}></ExpenseItem>)}
        </Card>
    );
}

export default Expenses;
