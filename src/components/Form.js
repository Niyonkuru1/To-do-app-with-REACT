import React, {useState} from 'react'
// import CombinedInputs from './CombinedInputs'
// import ButtonComp from './ButtonComp';
import nextId from "react-id-generator";
import "./InputForm.css";
import "./CombinedInputs.css";
import "./ButtonComp.css";

import "./Form.css";

const Form = (props) => {
const [name, setName] = useState(" ");
const [description, setDescription] = useState(" ");

const nameDataHandler = (event) => {
  // console.log(event.target.value);
  setName(event.target.value);
};
const descriptionDataHandler = (event) => {
  // console.log(event.target.value);
  setDescription(event.target.value);
};

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onDataSaved({
      id: nextId(),
      product: name,
      date: description,
    });
    // console.log(products);

    // Resetting the form to be empty again
    setName("");
    setDescription("");

    // console.log(products);
  };
  return (
    <form className="form-style">
      <div className="inputCom">
        <div className="input-style">
          <label>Name</label>
          <input type="text" required
           onChange={nameDataHandler} 
           value={name} />
        </div>
        <div className="input-style">
          <label>Description</label>
          <input type="text" required 
          onChange={descriptionDataHandler} 
          value={description} />
        </div>
      </div>
      <div>
        <button className="addTodo" type="submit" onClick={formSubmitHandler}>
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default Form
