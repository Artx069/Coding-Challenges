"use strict";
/*
Implement the method filter, which accepts a linked list (head) and a predicate function, and returns a new linked list (head) which only contains the elements which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
*/
function filter(head, p) {
  if (head == null) {
    return null;
  }
  let arr = [];

  while (head != null) {
    if (p(head.data)) {
      arr.push(head.data);
    }
    head = head.next;
  }
  let nodes = [];
  for (let i = 0; i < arr.length; i++) {
    nodes.push(new Node(arr[i]));
  }
  for (let i = nodes.length - 2; i >= 0; i--) {
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
}
