const {nextISSTimesForMyLocation} = require('./iss_promised');
const {printPassTimes} = require('./print-pass-times');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });