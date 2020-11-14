import React from "react";
import DayListItem from "./DayListItem";
export default function DayList(props) {


  return (
    <ul>
      {props.days.map(day => {
        const spots = Object.values(props.appointments).reduce((accumulator, appointment) => {
          if(day.appointments.includes(appointment.id) && appointment.interview === null){
            return accumulator + 1
          } else {
            return accumulator
          }
        }, 0)
        return (
          <>
            <DayListItem
              name={day.name}
              spots={spots}
              selected={day.name === props.day}
              setDay={props.setDay} />
          </>)
      })}
    </ul>
  );
}