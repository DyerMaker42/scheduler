import React, { Fragment } from 'react';

import "components/Appointment/styles.scss"

import "components/Button"

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from "hooks/useVisualMode"

const EMPTY = "EMPTY";
const SHOW = "SHOW";

export default function Appointment(props){
  const interviewTrue = props.interview;
  const {mode, transition, back} = useVisualMode(
    interviewTrue ?  SHOW: EMPTY
  )
  // const ShowOrGo = interviewTrue ? <Show name={props.interview.student} interviewer={props.interview.interviewer}/>:<Empty/>;
  return (
    <>
    <article className="appointment"></article>
    {mode === EMPTY && <Empty onAdd={() => console.log("Clicked onAdd")} />}
    {mode=== SHOW && <Show name={props.interview.student} interviewer={props.interview.interviewer}/>}
    {/* {ShowOrGo} */}
    </>
  )
  }


