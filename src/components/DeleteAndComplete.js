import React from 'react';
import DeleteButton from './DeleteButton';
import CompleteButton from './CompleteButton';
import "./DeleteAndComplete.css"

function DeleteAndComplete() {
  return (
    <div className='actions'>
      <CompleteButton></CompleteButton>
      <DeleteButton></DeleteButton>
    </div>
  )
}

export default DeleteAndComplete
