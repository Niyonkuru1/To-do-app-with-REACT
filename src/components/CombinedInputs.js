import React from 'react'
import InputForm from './InputForm'
import "./CombinedInputs.css";
const CombinedInputs = () => {
  return (
    <div className='inputCom'>
      <InputForm label = "Name"></InputForm>
      <InputForm label = "Description"></InputForm>
    </div>
  )
}

export default CombinedInputs
