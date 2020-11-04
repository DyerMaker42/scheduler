import React, { Fragment } from 'react';

import "components/Appointment/styles.scss"

import "components/Button"

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form"
import useVisualMode from "hooks/useVisualMode"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props){
  const interviewTrue = props.interview;
  const {mode, transition, back} = useVisualMode(
    interviewTrue ?  SHOW: EMPTY
  )
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    props.bookInterview(props.id, interview).then( res => console.log(res, "save res") )
  }

  // const ShowOrGo = interviewTrue ? <Show name={props.interview.student} interviewer={props.interview.interviewer}/>:<Empty/>;
  return (
    <>
    <article className="appointment"></article>
    {mode === EMPTY && <Empty onAdd={() => transition("CREATE", mode)}  />}
    {mode=== SHOW && <Show name={props.interview.student} interviewer={props.interview.interviewer}/>}
    {/* don't think this \/ should be show, like edit or create maybe */}
    {mode=== CREATE && <Form interviewer={[]} onCancel={back} onClick={save} /> } 
    {/* {ShowOrGo} */}
    </>
  )
  }


