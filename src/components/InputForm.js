import React from 'react'
import "./InputForm.css"
function InputForm(props) {
  return (
    <div className='input-style'>
      <label>{props.label}</label>
      <input type="text" />
    </div>
  )
}

export default InputForm
