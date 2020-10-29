import React from "react";

export default function Empty(props){
  const onClick = () => props.onAdd();


  return (
    <main className="appointment__add">
  <img
    className="appointment__add-button"
    src="images/add.png"
    alt="Add"
    onClick={onClick}
  />
</main>
  )
}