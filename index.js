// // Fetch My IP Callback
// const {fetchMyIP} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });


// // Fetch Coordinates Callback
// const { fetchCoordsByIP } = require('./iss');

// fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });


// // Flyover Times Callback
// const { fetchISSFlyOverTimes } = require('./iss');

// const exampleCoords = { latitude: '49.2827291', longitude: '-123.1207375' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });

// Flyover Times for my Location Callback
const { nextISSTimesForMyLocation } = require('./iss');
const { printPassTimes } = require('./print-pass-times');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

