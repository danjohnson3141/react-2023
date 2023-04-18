import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

const Expenses = (props) => {
  console.log('hi', props)
  if (props !== null) {
    props?.map(expense => {
      return (
        <ExpenseItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )
    })
  } else {
    <p>No expenses today</p>
  }
}

export default Expenses
