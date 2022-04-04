import React from 'react';
import "./Card.css";
// import useCard from './useCard';
import Card from "./Card";
// import { useState } from "react";


const RenderCard = (props) => {
    // const [idi,setIdi] = useState(null);
    // console.log(props.arrayProducts)
    var arra = props.arrayProducts;
    // const [arra, setArra] = useState(props.arrayProducts);
    const captureIdToDelete = (id) =>{
        props.obtainId(id);
    }

  return (
    <div className="render-style">
      {
        arra.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            date={product.date}
            producti={product.product}
            captureId={captureIdToDelete}
          />
        );
      })}
    </div>
  );
}

export default RenderCard
