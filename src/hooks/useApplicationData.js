import React, { useState } from "react";
import axios from "axios";



export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    spots: 5,
    appointments: [],
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  const bookInterview = (id, interview) => {

    return axios.put(`/api/appointments/${id}`, { interview: interview })
      .then((res, err) => {
        console.log(res, "axios promise")
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview }
        }
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        setState({
          ...state,
          appointments
        });

      })
      

  };

  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`,)
      .then((res, err) => {

        const appointment = {
          ...state.appointments[id],
          interview: null
        }
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        setState({
          ...state,
          appointments
        });

      })
      
  }

  return {
    state: state,
    setState: setState,
    setDay: setDay,
    bookInterview: bookInterview,
    cancelInterview: cancelInterview
  }
}

