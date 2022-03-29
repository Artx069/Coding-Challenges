"use strict";
/*
Given the root of a tree with an arbitrary number of child nodes, return a list containing the nodes' data in breadth-first order (left to right, top to bottom).

Child nodes are stored in a list. Leaf nodes use None instead.

Example:

           1
          / \
         2   3  -> [1,2,3,4,5,6,7]
        /|\   \
       4 5 6   7
*/
/* preloaded Node definition :
class Node {
  constructor (data, children = null) {
    this.data = data;
    this.children = children;
  }
}
*/

function treeToArray(tree) {
  let sol = [];
  let arr = [tree];

  for (let leaf of arr) {
    if (leaf["data"] || leaf["data"] == null || leaf["data"] == false) {
      sol.push(leaf["data"]);
      if (leaf["children"]) {
        arr.push(...leaf["children"]);
      }
    }
  }
  return sol;
}
