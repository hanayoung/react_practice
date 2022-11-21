import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpenseList=(props)=>{
  if(props.item.length===0){
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>
  }
 return(
  <ul className='expenses-list'>
    {props.item.map((item)=>(
      <ExpenseItem 
        key={item.id}
        title={item.title} 
        amount={item.amount} 
        date={item.date}
        />
      ))
    }
    </ul>
 )
}
export default ExpenseList;
