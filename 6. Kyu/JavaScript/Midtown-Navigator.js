"use strict";
/*
Create a function that tells the user how to get around Midtown in Manhattan. The function should be able to help the user to get from one location in this area to another.

Streets run east-west. Street numbers increase as they move northward, from 1st street in Greenwich Village to 220th street in the Inwood section. Avenues run south-north, with numbers beginning on the east side of the island and increase to the west.

"The Encyclopedia of New York City" defines Midtown as extending from 34th Street to 59th Street (going northwards) and from 3rd Avenue to 8th Avenue (going westwards).

For example:

start = "8th Ave and W 38th St"
end = "7th Ave and W 36th St"
The code above should tell the user how to get from 8th Ave and W 38th St to 7th Ave and W 36th St. It should then output as a string how many blocks north/south, and then how many blocks east/west the user should travel.

start = "8th Ave and W 38th St"
end = "7th Ave and W 36th St"
output => "Walk 2 blocks south, and 1 blocks east"

start = "5th Ave and W 46th St"
end = "7th Ave and E 58th St"
output => "Walk 12 blocks north, and 2 blocks west"
Note: When the avenues are same, the direction of movement should be west and when the streets are same the direction should be north.


*/
function midtownNav(start, end) {
  let startArr = [
    parseInt(start.match(/^[0-9]+[thst]+/)[0].replace(/[a-z]/g, "")),
    parseInt(start.match(/ [0-9]+[thst]+/)[0].replace(/[a-z]/g, "")),
  ];
  let endArr = [
    parseInt(end.match(/^[0-9]+[thst]+/)[0].replace(/[a-z]/g, "")),
    parseInt(end.match(/ [0-9]+[thst]+/)[0].replace(/[a-z]/g, "")),
  ];
  return `Walk ${Math.abs(startArr[1] - endArr[1])} blocks ${
    startArr[1] - endArr[1] > 0 ? `south` : `north`
  }, and ${Math.abs(startArr[0] - endArr[0])} blocks ${
    startArr[0] - endArr[0] > 0 ? `east` : `west`
  }`;
}
