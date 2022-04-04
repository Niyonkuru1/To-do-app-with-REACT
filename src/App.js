import { useState } from "react";

import TitleHead from "./components/TitleHead";
import Form from "./components/Form";
import "./App.css";
import RenderCard from "./components/RenderCard";

function App() {
  const [productsArr, setProductsArr] = useState([]);

  const dataRecevedHandler = (produits) => {
    // console.log(produits);
    setProductsArr((prevPro) => {
      return [produits, ...prevPro];
    });
  };
const setProd = (id)=>{
  //  setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
  setProductsArr((prevArr) => {
    return prevArr.filter((item)=>{
      return item.id !== id
    });
  });
}
  return (
    <div className="container">
      <TitleHead></TitleHead>
      <Form onDataSaved={dataRecevedHandler} ></Form>
      <RenderCard arrayProducts={productsArr} obtainId = {setProd} ></RenderCard>
    </div>
  );
}

export default App;
