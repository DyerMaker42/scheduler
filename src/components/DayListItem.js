import React from "react";

import "components/DayListItem.scss";

let classNames = require('classnames');

export default function DayListItem(props) {
  const selectItem = class

  return (
    <li 
    className= {selectItem} 
    onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}