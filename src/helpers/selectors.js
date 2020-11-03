import react from 'react';

export function getAppointmentsForDay(state, day) {
  // if (!day){
  //   return [];
  // }
  
  const filteredDays = state.days.filter(appointment => appointment.name === day);
  
   console.log("filtered days", filteredDays)
  //  if (!filteredDays[0].appointments){
  //    return filteredDays[0]
  //  }
 if (!filteredDays[0]){
   return [];
 } 
if (!filteredDays[0].appointments){
  return filteredDays[0]
}
 return filteredDays[0].appointments
};