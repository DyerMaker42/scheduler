import React, {useState} from "react";

import InterviewerList from "components/InterviewerList.js";

import Button from "components/Button";

export default function Form(props){

  
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const onInput = onClick((event)=> {
    setName();
  })
  const reset=(()=>{
    setName("");
    setInterviewer(null);
  });
  const cancel =(()=>{
   props.onCancel();
  });



  return (
  <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name={name}
        type="text"
        placeholder="Enter Student Name"
        onClick={onInput}
        /*
          This must be a controlled component
        */
      />
    </form>
    {/* decison to update value or */}
    <InterviewerList interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer} />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger>{cancel && reset}</Button>
      <Button confirm>{props.onSave}</Button>
    </section>
  </section>
</main>
  
  
    )
} 