import React, { Fragment } from 'react';

import "components/Appointment/styles.scss"

import "components/Button"

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from "hooks/useVisualMode"

export default function Appointment(props){
  const interviewTrue = props.interview;
  const ShowOrGo = interviewTrue ? <Show name={props.interview.student} interviewer={props.interview.interviewer}/>:<Empty/>;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  
  return (
    <>
    <article className="appointment"></article>
    {ShowOrGo}
    </>
  )
  }


