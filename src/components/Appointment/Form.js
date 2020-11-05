import React, { useState } from "react";

import InterviewerList from "components/InterviewerList.js";

import Button from "components/Button";

export default function Form(props) {


  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const onInput = ((event) => {
    setName();
  })
  const reset = (() => {
    setName("");
    setInterviewer(null);
  });
  const cancel = (() => {
    props.onCancel();
    reset();
  });

  const save = () => {
    props.onSave(name, interviewer)
  }

  const onNameChange = (event) => {
    setName(event.target.value)
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name='name'
            type="text"
            placeholder="Enter Student Name"
            onClick={onInput}
            onSubmit={event => event.preventDefault()}
            value={name}
            onChange={onNameChange}
          />
        </form>
        
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button onClick={save} confirm>Save</Button>
        </section>
      </section>
    </main>


  )
} 