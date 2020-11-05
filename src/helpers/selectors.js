import InterviewerListItem from 'components/InterviewerListItem';
import react from 'react';

export function getAppointmentsForDay(state, day) {


  //goes through all days if it matches day as second arguement
  const filteredDay = state.days.find(dayEntry => dayEntry.name === day)

  if (!filteredDay) {
    return []
  }
  //returning array of appointment objects
  const dayAppointments = filteredDay.appointments.map(appointmentID => {
    return state.appointments[appointmentID]
  })
  return dayAppointments
};

export function getInterview(state, interview) {
  let intObj = null;
  if (!interview) {
    return intObj
  }
  for (const person in state.interviewers) {
    if (person == interview.interviewer) {
      intObj = { student: interview.student, interviewer: state.interviewers[person] }
    }
  }
  return intObj
}

export function getInterviewersForDay(state, day) {
  const filtInt = [];
  for (const dayEntry of state.days) {
    if (dayEntry.name === day) {

      //goes through each interviwer that are there on that day 
      //and it pushes their respectivf int objet to filt int array to be returned
      dayEntry.interviewers.forEach((id) => {
        filtInt.push(state.interviewers[id])
      })
    }
  }
  return filtInt;
}

