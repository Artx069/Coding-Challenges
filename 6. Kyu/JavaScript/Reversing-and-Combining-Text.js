"use strict";
/*
Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...

So what to do?
Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...
Some easy examples:
Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"
I think it's clear?! First there are some static tests, later on random tests too...
*/
function reverse_and_combine_text(str) {
  let arr = str.split(" ");
  while (arr.length > 1) {
    arr = arr.map((x) => x.split("").reverse().join(""));
    let newArr = [];
    while (arr.length >= 1) {
      let one = arr.shift();
      let two = arr.length > 0 ? arr.shift() : "";
      one += two;
      newArr.push(one);
      i = 0;
    }

    arr = newArr;
  }
  return arr[0];
}
