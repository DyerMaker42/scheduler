import React, { useState, useEffect } from "react";
import axios from "axios";



export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    spots: 5,
    appointments: [],
    interviewers: {}
  });

  const testUrl = {
    "GET_DAYS": "/api/days",
    "GET_APPOINTMENTS": "/api/appointments",
    "GET_INTERVIEWERS": "/api/interviewers",
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

