import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "components/DayList"
import "components/Application.scss";
import Appointment from "components/Appointment";

import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors.js"
import useApplicationData from "hooks/useApplicationData";


export default function Application(props) {
  const {state, setState, setDay, bookInterview, cancelInterview} = useApplicationData();

  
  const appointments = getAppointmentsForDay(state, state.day);

  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    const interviewersForDay = getInterviewersForDay(state, state.day)
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewersForDay}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });
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
      
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);


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
            appointments={state.appointments}
          />

        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
      </section>
    </main>
  );
}
