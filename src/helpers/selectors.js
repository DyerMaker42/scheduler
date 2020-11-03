import react from 'react';

export default function getAppointmentsByDay(state, day){
  const filteredDays = state.filter(appointment => appointment.name === day );
  return filteredDays;
}