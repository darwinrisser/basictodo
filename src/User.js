import React from 'react';

function User(props){

  let buttonText;
  props.hidden ? buttonText = "Show Name" : buttonText = "Hide Name";
  
  let nameText;
  props.hidden ? nameText = null : nameText = props.name;

  return (
    <div style={{padding: "1rem", display:"flex", textAlign: "center"}}>
      <h1>{nameText}</h1>
      <img src={props.image} alt="thumbnail"/>
      <button onClick={ ()=> props.hide(props.index) }>{buttonText}</button>
    </div>
  
  )
}

export default User;