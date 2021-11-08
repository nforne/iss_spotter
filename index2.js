const { nextISSTimesForMyLocation } = require('./iss_promised');

// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files

// Call 
nextISSTimesForMyLocation()
  .then((response) => {
    for (let i of response) {
      console.log(`Next pass at ${new Date(new Date().getTime() + i.risetime)} for ${i.duration} seconds!`);
    }
  })

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // index2.js
// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then((body) => {for (let i of JSON.parse(body).response) {
//     // console.log(JSON.parse(body).response);
//     console.log(`Next pass at ${new Date(new Date().getTime() + i.risetime)} for ${i.duration} seconds!`)
//     }
//   });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>