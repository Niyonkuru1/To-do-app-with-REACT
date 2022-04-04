import React from 'react';
// import DeleteButton from './DeleteButton';
// import CompleteButton from './CompleteButton';
import "./DeleteButton.css";
import "./CompleteButton.css";

import "./DeleteAndComplete.css"

function DeleteAndComplete() {
  return (
    <div className="actions">
      <div>
        <button className="addComplete">Complete</button>
      </div>
      <div>
        <button className="addDelete">Delete</button>
      </div>
    </div>
  );
}

export default DeleteAndComplete
