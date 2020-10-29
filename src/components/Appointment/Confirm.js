import React from "react";


// import Button from "src/components/Button";

import Button from "components/Button";


export default function Confirm(props){
  
  const onClickCancel = () => {
    props.onCancel()
  }

  const onClickConfirm = () => {
    props.onConfirm()
  }


  return(
    <main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">{props.message}</h1>
  <section className="appointment__actions">
    <Button  onClick={onClickCancel} danger>Cancel</Button>
    <Button onClick={onClickConfirm} danger>Confirm</Button>
  </section>
</main>
  )

}