import React from 'react';
// import DeleteAndComplete from './DeleteAndComplete'
// import ContentComp from './ContentComp';
import "./sideStyles/DeleteButton.css";
import "./sideStyles/CompleteButton.css";
import "./sideStyles/DeleteAndComplete.css";
import "./sideStyles/ContentComp.css";
import "./Card.css"
import { useState } from "react";

const Card = (props) => {
  let strike = 'content';
  let addRemove = "addComplete";
  const [strikeThrough, setStrikeThrough] = useState(false);
const toggleClassHandler = ()=>{
  setStrikeThrough(true);
}

const sendIdToDeleteButton = ()=>{
   props.captureId(props.id);

}

if (strikeThrough) {
  strike = "content content-style";
  addRemove = "addComplete removeComplete";
}
  return (
    <div className="card-actions">
      <div className= {strike}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
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
