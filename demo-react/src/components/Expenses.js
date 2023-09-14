import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {

    return (
        <Card className="expenses">
            {props.items.map(p => <ExpenseItem title={p.title} amount={p.amount} date={p.date}></ExpenseItem>)}
        </Card>
    );
}

export default Expenses;
