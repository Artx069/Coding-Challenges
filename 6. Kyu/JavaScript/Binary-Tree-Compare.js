"use strict";
/*
Given the node object:

Node:
  val: <int>,
  left: <Node> or null,
  right: <Node> or null
write a function compare(a, b) which compares the two trees defined by Nodes a and b and returns true if they are equal in structure and in value and false otherwise.

Examples:

1       1
| \     | \
2  3    2  3
=> true

1       1
| \     | \
3  3    2  3
=> false (values not the same 2 != 3)

1       1
| \     |
2  3    2
        |
        3
=> false (structure not the same)
*/
// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise
function compare(a, b) {
  if (a === null && b === null) {
    return true;
  } else if (a === null || b === null) {
    return false;
  }

  let depthA = 0;
  let depthB = 0;

  let nodesA = [a];
  let valuesA = [];
  let nodesB = [b];
  let valuesB = [];

  for (let leaf of nodesA) {
    depthA++;
    valuesA.push(leaf.val);
    if (leaf.left !== null) {
      nodesA.push(leaf.left);
    } else {
      valuesA.push("nullL");
    }
    if (leaf.right !== null) {
      nodesA.push(leaf.right);
    } else {
      valuesA.push("nullR");
    }
  }
  for (let leaf of nodesB) {
    depthB++;
    valuesB.push(leaf.val);
    if (leaf.left !== null) {
      nodesB.push(leaf.left);
    } else {
      valuesB.push("nullL");
    }
    if (leaf.right !== null) {
      nodesB.push(leaf.right);
    } else {
      valuesB.push("nullR");
    }
  }

  return valuesA.join("") == valuesB.join("") && depthA == depthB;
}
