import React from "react";

import "components/InterviewerListItem.scss"

let classNames = require('classnames');


export default function InterviewerListItem(props) {
  //   id:number - the id of the interviewer
  // name:string - the name of the interviewer
  // avatar:url - a url to an image of the interviewer
  // selected:boolean - to determine if an interview is selected or not
  // setInterviewer:function - sets the interviewer upon selection


  // console.log(props, "props");

  const interviewerClass = classNames("interviewers__item",
    { "interviewers__item--selected":props.selected},
    {}

  );
  //event handler
 const onClick = ((click)=>{
  props.setInterviewer(props.id)
   })
  //set class

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}