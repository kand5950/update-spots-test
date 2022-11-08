/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function(state, appointments, id) {
  const days = [...state.days]
  return days.map(day => {
    const newDay = {...day}
    let spots = 0;
    newDay.appointments.forEach(id => {
      if(appointments[id].interview === null) {
        spots++;
      }
    })
    newDay.spots = spots;
    return newDay;
  })
};

module.exports = updateSpots;
