import React from 'react'
import DeleteAndComplete from './DeleteAndComplete'
import ContentComp from './ContentComp'
import "./Card.css"

const Card = () => {
  return (
    <div className='card-actions'>
      <ContentComp></ContentComp>
      <DeleteAndComplete></DeleteAndComplete>
    </div>
  )
}

export default Card
