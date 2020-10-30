import React, { Fragment } from 'react';

import "components/Appointment/styles.scss"

import "components/Button"

import Header from "./Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";

export default function Appointment(props){
  // const interviewTrue = props.interview;
  // const ShowOrGo= (props) {
  //   interviewTrue? <Show student=props.student />:<Empty/>
  // }
  return (
    <>
    <article className="appointment"></article>
    {/* {ShowOrGo} */}
    </>
  )
  }


