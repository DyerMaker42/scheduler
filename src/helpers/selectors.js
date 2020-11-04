import InterviewerListItem from 'components/InterviewerListItem';
import react from 'react';

export function getAppointmentsForDay(state, day) {
  // if (!day){
  //   return [];
  // }
  
  
  const filteredDays = []
 
  for (const appt of state.days) {
    if (appt.name === day) {
      for (let appointment of appt.appointments) {
        filteredDays.push(state.appointments[appointment])
      }
    }
  }

  //   const filteredDays = state.days.filter(appointment => appointment.name === day);
  //   //get a code review added test to add a .id, don't think I was supposed to do that
  //    console.log("filtered days", filteredDays)
  //   //  if (!filteredDays[0].appointments){
  //   //    return filteredDays[0]
  //   //  }
  //  if (!filteredDays[0]){
  //    return [];
  //  } 
  // if (!filteredDays[0].appointments){
  //   return filteredDays[0]
  // }
  return filteredDays
};

export function getInterview(state, interview) {
  let intObj = null;
  if (!interview) {
    return intObj
  }

  for (const person in state.interviewers) {
    // console.log("AAA", person)
    // console.log("BBB", interview.interviewer)
    if (person == interview.interviewer) {
      intObj = { student: interview.student, interviewer: state.interviewers[person] }
    }
  }


  return intObj
}

export function getInterviewersForDay(state, day){
  const filtInt = [];
  for (const int of state.days) {
    if (int.name === day) {
      // let int = state.appointments[appointment].interview.interviewer;
      for (let appointment of int.appointments) {
        if (state.appointments[appointment].interview && !filtInt.includes(state.interviewers[state.appointments[appointment].interview.interviewer])) {
          filtInt.push(state.interviewers[state.appointments[appointment].interview.interviewer]);
        }
      }
    }
  }
  console.log(filtInt)
    return filtInt;
}

