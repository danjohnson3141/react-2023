import './ExpenseItem.css'

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 1, 22)
  // const expenseDescription = 'Tools'
  // const expensePrice = 3141.59
  return (
    <div className='expense-item'>
      <div><p>{props.date?.toISOString()}</p></div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
