"use strict";

/*
After yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.
http://myfreebingocards.com/numbers/1-75/printable-bingo-card-generator/link_img.png
*/
function getCard() {
  let cols = [
    { name: "B", min: 1, max: 15 },
    { name: "I", min: 16, max: 30 },
    { name: "N", min: 31, max: 45 },
    { name: "G", min: 46, max: 60 },
    { name: "O", min: 61, max: 75 },
  ];
  let sol = [];

  let current = new Set();
  for (let i = 0; i < cols.length; i++) {
    while (current.size < (i == 2 ? 4 : 5)) {
      let maximum = cols[i].max;
      let minimum = cols[i].min;
      let rand = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

      current.add("" + cols[i].name + rand);
    }

    sol.push(...current);
    current = new Set();
  }
  return sol;
}
