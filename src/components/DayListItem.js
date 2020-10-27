import React from "react";

import "components/DayListItem.scss";

let classNames = require('classnames');

export default function DayListItem(props) {
  const selectClass = classNames("day-list__item",
  {"day-list__item--selected":props.selected},
  {"day-list__item--full": props.spot == 0}
)

  return (
    <li 
    className= {selectClass} 
    onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}