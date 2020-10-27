import React from "react";

let classNames = require('classnames');

export default function InterviewerListItem(props) {
  


  return (
    <ul>
      <li className="interviewers__item">
        <img
          className="interviewers__item-image"
          src="https://i.imgur.com/LpaY82x.png"
          alt="Sylvia Palmer"
        />
      Sylvia Palmer
      </li>
    </ul>
  )
}