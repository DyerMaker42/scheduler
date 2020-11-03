import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "components/DayList"
import "components/Application.scss";
import Appointment from "components/Appointment";

import getAppointmentsForDay from "helpers/selectors.js"


//hardcoded appt variables

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "4pm",
//     interview: {
//       student: "Mike Tyson",
//       interviewer: {
//         id: 2,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 4,
//     time: "6pm",
//     interview: {
//       student: "Manny Paquiao",
//       interviewer: {
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
// ];

export default function Application(props) {
  // old

  // const [day, setDay] = useState("Monday");
  // // new 
  // const [days, setDays] = useState([]);

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: [], 
    interviewers:{}
  });
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  //state = { day: "Monday", days: [] };
  setState({ ...state, day: "Tuesday", });
  const setDay = day => setState({ ...state, day });
  //const setDays = day => setState(prev => ({ ...prev, days }));


  const testUrl = {
    "GET_DAYS": "http://localhost:8001/api/days",
    "GET_APPOINTMENTS": "http://localhost:8001/api/appointments",
    "GET_INTERVIEWERS": "http://localhost:8001/api/interviewers",
  }

  useEffect(() => {
    Promise.all([
      axios.get(testUrl["GET_DAYS"]),
      axios.get(testUrl["GET_APPOINTMENTS"]),
      axios.get(testUrl["GET_INTERVIEWERS"]),
    ]).then((all) => {
      console.log("ALL",all)
      setState(prev => ({...prev, days:all[0], appointments:all[1], interviewers:all[2]}));
      // console.log(days, appointments, interviewers)
    });

    

    // axios.get(testUrl).then((res) => {
    //   // console.log(res.data)
    //   //
    // })
  });


  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />

        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments.map((appointment) => {
          return <Appointment key={appointment.id} {...appointment} />
        })}

        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
