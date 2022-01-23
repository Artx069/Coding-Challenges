"use strict";
/*
Given an array of words and a target compound word, your objective is to find the two words which combine into the target word, returning both words in the order they appear in the array, and their respective indices in the order they combine to form the target word. Words in the array you are given may repeat, but there will only be one unique pair that makes the target compound word. If there is no match found, return null/nil/None.

Note: Some arrays will be very long and may include duplicates, so keep an eye on efficiency.

Examples:

fn(['super','bow','bowl','tar','get','book','let'], "superbowl")      =>   ['super','bowl',   [0,2]]
fn(['bow','crystal','organic','ally','rain','line'], "crystalline")   =>   ['crystal','line', [1,5]]
fn(['bow','crystal','organic','ally','rain','line'], "rainbow")       =>   ['bow','rain',     [4,0]]
fn(['bow','crystal','organic','ally','rain','line'], "organically")   =>   ['organic','ally', [2,3]]
fn(['top','main','tree','ally','fin','line'], "mainline")             =>   ['main','line',    [1,5]]
fn(['top','main','tree','ally','fin','line'], "treetop")              =>   ['top','tree',     [2,0]]
*/
function compoundMatch(words, target) {
  let sol = [];
  for (let i = 0; i < target.length; i++) {
    let firstPart = target.substring(0, i);
    let secondPart = target.substring(i, target.length);
    if (words.indexOf(firstPart) != -1 && words.indexOf(secondPart) != -1) {
      if (words.indexOf(firstPart) < words.indexOf(secondPart)) {
        sol.push(firstPart);
        sol.push(secondPart);
      } else {
        sol.push(secondPart);
        sol.push(firstPart);
      }

      sol.push([words.indexOf(firstPart), words.indexOf(secondPart)]);
    }
  }
  return sol.length > 0 ? sol : null;
}
