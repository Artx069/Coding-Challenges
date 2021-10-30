"use strict";

/*
Timmy spends a lot of time talking on the phone and he would like to see which friends he talks to the most. TASK:
Complete the function closestFriends that takes an array history as input. Each element of history is a string in the following format "(000) 000-0000 00:00:00" (where the first part "(000) 000-0000" represents the phone number Timmy talked to and the second "00:00:00" is the call duration (hours : minutes : seconds). Your job is to find the three contacts Timmy talked to the most and return their names in an array sorted by total call durations.
A global variable phonebook is preloaded and contains all the contacts and their phone numbers.

var phonebook = {
     'John' : '(555) 010-3535',
    'Melissa' : '(442) 130-5165',
  'Jack' : '(333) 010-5135'
    //and so on...
};
The input history array will always have at least three different phone numbers.

EXAMPLE:

var history = ["(555) 010-3535 00:13:24", "(442) 130-5165 01:36:26",
"(333) 010-5135 01:38:24"];
closestFriends(history)  // should return ['Jack','Melissa','John'];
*/
function closestFriends(history) {
  let map = new Map();
  function getNameByNumber(phoneNum) {
    return Object.keys(phonebook).find((key) => phonebook[key] === phoneNum);
  }

  for (let number of history) {
    let time = number.match(/\d+\:\d+\:\d+/)[0].split(":");
    let seconds = +time[0] * 60 * 60 + +time[1] * 60 + +time[2];
    let phoneNumber = number.substr(0, 14);
    let name = getNameByNumber(phoneNumber);

    if (!map.has(name)) {
      map.set(name, seconds);
    } else {
      map.set(name, map.get(name) + seconds);
    }
  }
  const mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  let sol = [];
  let counter = 0;
  for (let key of mapSort1.keys()) {
    if (counter == 3) {
      break;
    } else {
      console.log(key);
      sol.push(key);
      counter++;
    }
  }
  return sol;
}
