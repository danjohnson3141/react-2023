import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2023, 1, 22)
  const expenseDescription = 'Tools'
  const expensePrice = 3141.59
  return (
    <div className='expense-item'>
      <div><p>{expenseDate.toISOString()}</p></div>
      <div className='expense-item__description'>
        <h2>{expenseDescription}</h2>
        <div className='expense-item__price'>{expensePrice}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
