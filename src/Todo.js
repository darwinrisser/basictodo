import React from 'react';

function Todo(props) {
  const getStyle = () => {
    return {
      textDecoration: props.isComplete ? "line-through" : "none"
    }
  }

  return(
    <div onClick={()=> props.markComplete(props.id)}>
      <p style={getStyle()}>
        {props.text}
      </p>
    </div>
  )
}

export default Todo;