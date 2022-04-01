import React from 'react'
import CombinedInputs from './CombinedInputs'
import ButtonComp from './ButtonComp';
import "./Form.css";

const Form = () => {
  return (
    <div className='form-style'>
        <CombinedInputs></CombinedInputs>
      <ButtonComp></ButtonComp>
    </div>
  )
}

export default Form
