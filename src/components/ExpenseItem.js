import './ExpenseItem.css'

function ExpenseItem(props) {
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
