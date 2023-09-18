import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Nessuna spesa trovata.</h2>
    }

    return <ul className='expenses-list'>
        {props.items.map(p => <ExpenseItem key={p.id} title={p.title} amount={p.amount}
                                           date={p.date}></ExpenseItem>)}
    </ul>
}

export default ExpensesList;