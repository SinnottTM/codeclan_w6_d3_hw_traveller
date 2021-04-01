const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map(journey => journey.startLocation)
}

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
}

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((accumulator, journey) => {
    return accumulator + journey.distance;
  }, 0)
};

// A method, used stuart's idea for this one so all credit to him here. Works.
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let modesOfTransport = [];
//   this.journeys.forEach((journey) => {
//     if (!modesOfTransport.includes(journey.transport)) {
//       modesOfTransport.push(journey.transport);
//     }
//   })
//   return modesOfTransport;
// };

// Vitor's original solution, very clever but the lecturers recommended spreading it out (see below). Works
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   return unique = [...new Set(this.journeys.map(item => item.transport))];
// };

//Vitor's solution spread out by lecturers (see above). Works.
Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportModes = this.journeys.map(item => item.transport);
  const uniqueTransportModesSet = new Set(transportModes); // Set does not allow duplicates
  // console.log(uniqueTransportModesSet) TO TEST IS THIS LIST CORRECT IN TERMINAL
  return [...uniqueTransportModesSet]
};

// Method CodeClan recommended... Gotta say, this feels messy. Works
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   return this.journeys.map((journey) => {
//     return journey.transport;
//   })
//   .filter((transport, index, array) => {
//     return array.indexOf(transport) === index;
//   })
// };

module.exports = Traveller;