import React from "react";
import DayListItem from "./DayListItem";
export default function DayList(props){
  
  // props.map(day => {
  //   <DayListItem
  //     name={day.name}
  //    spots={day.spots}
  //    selected={day.name === props.day}
  //    setDay={day.setDay}
  //    key={day.id}
  //   />
  // })
  console.log(props, 'props')
  /* get mentor help tomrorow */

  return (
  <ul>
    
    {props.days.map(day => {
    return (
      <>
      <DayList days={days} day={day} setDay={setDay} />
      <DayListItem 
      name={day.name} 
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={props.setDay}  />
      </>)
  })}
  </ul>
  );
}