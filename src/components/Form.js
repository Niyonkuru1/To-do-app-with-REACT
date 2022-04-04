import React, {useState} from 'react'
import nextId from "react-id-generator";
import "./sideStyles/InputForm.css";
import "./sideStyles/CombinedInputs.css";
import "./sideStyles/ButtonComp.css";
import "./Form.css";

const Form = (props) => {
const [name, setName] = useState(" ");
const [description, setDescription] = useState(" ");

const nameDataHandler = (event) => {
  setName(event.target.value);
};
const descriptionDataHandler = (event) => {
  setDescription(event.target.value);
};

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onDataSaved({
      id: nextId(),
      name: name,
      description: description,
    });

    setName("");
    setDescription("");
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
