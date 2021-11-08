// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');

/*
let rIP = 'ip'; // reqired IP
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
  rIP = ip;
});
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
// let rCoords = coords;  // required coordinates
fetchCoordsByIP(rIP, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    // rCoords = data;
  }
});
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
let rIssOts = "";  // iss fly obver times
fetchISSFlyOverTimes(rCoords, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    rIssOts = data.response;
    console.log(rIssOts)
  }
});
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

nextISSTimesForMyLocation();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
*/