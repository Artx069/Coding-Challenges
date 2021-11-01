"use strict";
/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/
function tickets(peopleInLine) {
  let cashregister = {
    twentyFivers: 0,
    fifties: 0,
    hunnies: 0,
  };

  let price = 25;

  let answer = "";

  for (let peep of peopleInLine) {
    let cashBack = peep - price;
    if (peep == 25) {
      cashregister.twentyFivers++;
    } else if (peep == 50) {
      cashregister.fifties++;
    } else {
      cashregister.hunnies++;
    }

    let cashBackPossible = false;

    if (cashBack == 25 && cashregister.twentyFivers > 0) {
      cashregister.twentyFivers--;
      answer = "YES";
      cashBackPossible = true;
    } else if (cashBack == 25 && cashBackPossible == false) {
      answer = "NO";
    }
    if (cashBack == 50 && cashregister.fifties > 0) {
      cashregister.twentyFivers--;
      answer = "YES";
      cashBackPossible = true;
    } else if (cashBack == 50 && cashregister.twentyFivers >= 2) {
      cashregister.twentyFivers--;
      cashregister.twentyFivers--;
      answer = "YES";
      cashBackPossible = true;
    } else if (cashBack == 50 && cashBackPossible == false) {
      answer = "NO";
    }

    if (
      cashBack == 75 &&
      cashregister.fifties >= 1 &&
      cashregister.twentyFivers >= 1
    ) {
      cashregister.twentyFivers--;
      cashregister.fifties--;
      answer = "YES";
      cashBackPossible = true;
    } else if (cashBack == 75 && cashregister.twentyFivers >= 3) {
      cashregister.twentyFivers--;
      cashregister.twentyFivers--;
      cashregister.twentyFivers--;

      answer = "YES";
      cashBackPossible = true;
    } else if (cashBack == 75 && cashBackPossible == false) {
      answer = "NO";
    }
  }

  if (answer == "NO") {
    return answer;
  } else {
    return "YES";
  }
}
