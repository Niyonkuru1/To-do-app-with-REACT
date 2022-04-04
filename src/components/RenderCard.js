import React from 'react';
import "./Card.css";
import Card from "./Card";


const RenderCard = (props) => {
    const arra = props.arrayItems;
    const captureIdToDelete = (id) =>{
        props.obtainId(id);
    }

  return (
    <>
      {
        arra.length === 0 ? <h2>You have no todos yet !!</h2> : 
        arra.map((Item) => {
        return (
          <Card
            key={Item.id}
            id={Item.id}
            description={Item.description}
            name={Item.name}
            captureId={captureIdToDelete}
          />
        );
      })}
    </>
  );
}

export default RenderCard
