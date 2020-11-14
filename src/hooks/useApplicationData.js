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

    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview: interview })
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
      .catch((err, res) => {

        console.log(err, "sorry charlie")

      })

  };

  const cancelInterview = (id) => {
    return axios.delete(`http://localhost:8001/api/appointments/${id}`,)
      .then((res, err) => {

        const appointment = {
          ...state.appointments[id],
          interview: { ...state.interview }
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
      .catch((err, res) => {

        console.log(err, "sorry charlie")

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

