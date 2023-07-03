
let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let runnerAge = 25;

const raceStart =
  runnerAge >= 18 && registerEarly
    ? "9:30am"
    : runnerAge > 18 && !registerEarly
    ? "11:00am"
    : "12:30pm";

raceNumber =
  runnerAge >= 18 && registerEarly
    ? raceNumber + 1000
    : raceNumber;

console.log(`Your race starts at ${raceStart} and your racenumber is ${raceNumber}`);

