const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIp = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipwho.is/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const location = {
    latitude: JSON.parse(body).latitude,
    longitude: JSON.parse(body).longitude,
  };
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${location.latitude}&lon=${location.longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIp)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};


module.exports = {nextISSTimesForMyLocation};