"use strict";
/*
Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).

Scoring rules:
Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. If there is no score less than or equal to 21 return the smallest score more than 21.

Examples
["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25
*/
function scoreHand(cards) {
  cards = cards.map((a) =>
    a == "K" || a == "Q" || a == "J" ? 10 : a == "A" ? a : parseInt(a)
  );
  let score = [];
  if (cards.indexOf("A") != -1) {
    let howManyA = cards.filter((a) => a == "A").length;

    let scoreWithoutA =
      cards.filter((a) => a != "A").length == 0
        ? 0
        : cards.filter((a) => a != "A").reduce((a, b) => a + b);

    for (let i = 0; i <= howManyA; i++) {
      let sumAs = (howManyA - i) * 11 + i * 1;
      score.push(scoreWithoutA + sumAs);
    }
  } else {
    score = cards.reduce((a, b) => a + b);
    return score;
  }
  if (score.filter((a) => a <= 21).length == 0) {
    return Math.min(...score);
  } else {
    return Math.max(...score.filter((a) => a <= 21));
  }
}
