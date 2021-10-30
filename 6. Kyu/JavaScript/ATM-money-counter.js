"use strict";
/*
Imagine that we have ATM with multiple currencies. The users can withdraw money of in any currency that the ATM has.

Our function must analyze the currency and value of what the users wants, and give money to the user starting from bigger values to smaller. The ATM gives the least amount of notes possible.

This kata has a preloaded dictionary of possible bank note values for different currencies (RUB, EUR, UAH, USD, CUP, SOS):

const VALUES = { "EUR": [5, 10, 20, 50, 100, 200, 500], "USD": ... }
// Note: VALUES and its internal arrays are frozen, don't try to mutate them
The function should return a string containing how many bank notes of each value the ATM will give out, for example:

"8 * 100 USD, 2 * 20 USD, 1 * 2 USD"
If it can't do that because there are no notes for this value, it should return:

"Can't do *value* *currency*. Value must be divisible by *amount*!"
(replace *value*, *currency* and *amount* with the relevant details)

If it doesn't have the requested currency at all, it should return:

"Sorry, have no *currency*."
Notes:
Letter case and word order doesn't matter in the input: e.g. "EUR 1000" and "1000eur" are the same. See test cases for more user input samples.
Do not create your own VALUES dictionary/hash or you'll get broken tests.
*/
function atm(value) {
  let amount = Number(value.replace(/[^0-9]/g, ""));
  let amountAtBeg = Number(value.replace(/[^0-9]/g, ""));
  let currency = value.replace(/[^a-zA-z]/g, "").toUpperCase();
  let availableBanknotes = VALUES[currency];
  let mapOutput = new Map();
  let arrayToSort = [];

  if (VALUES.hasOwnProperty(currency)) {
    for (let entry of availableBanknotes) [arrayToSort.push(entry)];
    for (let notes of arrayToSort.reverse()) {
      let counter = 0;
      while (amount >= notes) {
        counter++;
        amount -= notes;
      }
      mapOutput.set(notes, counter);
    }
    if (amount == 0) {
      let str = [];
      for (let entry of mapOutput.keys()) {
        if (entry == 0 || mapOutput.get(entry) == 0) {
          continue;
        } else {
          str.push(mapOutput.get(entry) + " * " + entry + " " + currency);
        }
      }

      return str.join(", ");
    } else {
      let str =
        "Can't do " +
        amountAtBeg +
        " " +
        currency +
        ". Value must be divisible by " +
        arrayToSort[arrayToSort.length - 1] +
        "!";
      return str;
    }
  } else {
    return "Sorry, have no " + currency + ".";
  }
}
