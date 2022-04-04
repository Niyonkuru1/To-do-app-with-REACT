import React from 'react';
// import DeleteAndComplete from './DeleteAndComplete'
// import ContentComp from './ContentComp';
import "./DeleteButton.css";
import "./CompleteButton.css";
import "./DeleteAndComplete.css";
import "./ContentComp.css";
import "./Card.css"
import { useState } from "react";

const Card = (props) => {
  let strike = 'content';
  let addRemove = "addComplete";
  // let idToDelete = null;
  const [strikeThrough, setStrikeThrough] = useState(false);
  // const[removeCard, setRemoveCard] = useState(false);
const toggleClassHandler = ()=>{
  setStrikeThrough(true);
}

const sendIdToDeleteButton = ()=>{
  // setRemoveCard(true);
   props.captureId(props.id);

}
//  if (removeCard) {
//  } else {
//    props.captureId(idToDelete);
//  }
// console.log(idToDelete)



if (strikeThrough) {
  strike = "content content-style";
  addRemove = "addComplete removeComplete";
}
  return (
    <div className="card-actions">
      <div className= {strike}>
        <h2>{props.producti}</h2>
        <p>{props.date}</p>
      </div>
      <div className="actions">
        <div>
          <button className={addRemove} onClick={toggleClassHandler}>Complete</button>
        </div>
        <div>
          <button className="addDelete" onClick={sendIdToDeleteButton}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card
