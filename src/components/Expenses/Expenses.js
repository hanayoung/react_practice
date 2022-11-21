import './Expenses.css';
import Card from '../../UI/Card';
import React,{useState} from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expenses(expenses){
  const [filteredYear,setFilteredYear]=useState('2022');
  const arr=Array(expenses.expenses);
  console.log(arr[0][0].date.getFullYear())
  console.log("filteredYe",filteredYear);
  const result=arr[0].filter((item)=>
    item.date.getFullYear().toString()===filteredYear
    )
  console.log("result",result);
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }
  
  return(
    <React.Fragment>
       <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onSelect={filterChangeHandler}/>
   <ExpensesList item={result}/>
   <ExpensesChart item={result}/>
   </Card>
  </React.Fragment>
      );
}
export default Expenses;