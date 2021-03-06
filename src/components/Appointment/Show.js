import React from "react";

export default function Show(props){

  const onClickDelete = () => props.onDelete();
  const onClickEdit = () => props.onEdit();
  
  return (
    <main className="appointment__card appointment__card--show">
  <section className="appointment__card-left">
    <h2 className="text--regular">{props.name}</h2>
    { props.error && <h4>{props.error}</h4> }
    <section className="interviewer">
      <h4 className="text--light">{props.interviewer.name}</h4>
      <h3 className="text--regular">{props.name}</h3>
    </section>
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <img
        className="appointment__actions-button"
        src="images/edit.png"
        alt="Edit"
        onClick={onClickEdit}
      />
      <img
        className="appointment__actions-button"
        src="images/trash.png"
        alt="Delete"
        onClick={onClickDelete}
      />
    </section>
  </section>
</main>
  )
}