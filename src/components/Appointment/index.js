import React, { Fragment } from 'react';

import "components/Appointment/styles.scss"

import "components/Button"

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form"
import useVisualMode from "hooks/useVisualMode"
import Status from "components/Appointment/Status"
import Confirm from "components/Appointment/Confirm"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDITING = "EDITING";
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR DELETE"

export default function Appointment(props) {
  const interviewTrue = props.interview;
  const { mode, transition, back } = useVisualMode(
    interviewTrue ? SHOW : EMPTY
  )
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(res => {
        transition(SHOW)
      })
      .catch(err => {
        transition(ERROR_SAVE)
      })
  }

  function deleting() {
    transition(DELETING, true)
    props.cancelInterview(props.id)
      .then((res) => {
        transition(EMPTY)
      })
      .catch((err) => transition(ERROR_DELETE, true))
  }

  function confirm() {
    transition(CONFIRM);
  }

  function edit() {
    transition(EDITING);
  }



  return (
    <article data-testid="appointment" className="appointment" key={props.id}>
      <Header time={props.time}></Header>
      {mode === EMPTY && <Empty onAdd={() => transition("CREATE", mode)} />}
      {mode === SHOW && <Show name={props.interview.student} interviewer={props.interview.interviewer}
        onEdit={edit} onDelete={confirm} />}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={back} onSave={save} />}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm onCancel={back} onConfirm={deleting} message="Are you sure you want to delete?" />}
      {mode === EDITING && <Form name={props.interview.student} interviewer={props.interview.interviewer.id}
        interviewers={props.interviewers} onSave={save} onCancel={back} />}

    </article>
  )
}


