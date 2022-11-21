import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../../UI/Card';
import React,{useState} from 'react';


function ExpenseItem(props){
  const [title,setTitle]=useState(props.title);
  const clickHandler=()=>{
    let randomNum=Math.random();
    setTitle(`Updated! ${randomNum}`);
    console.log(title);
  };

  return (
    <li>
  <Card className="expense-item"> 
    <ExpenseDate date={props.date}/>
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  </Card>
  </li>
  );
  
}

export default ExpenseItem;