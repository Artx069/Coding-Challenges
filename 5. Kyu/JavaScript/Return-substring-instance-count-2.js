"use strict";
/*
Complete the solution so that it returns the number of times the search_text is found within the full_text.

searchSubstr( fullText, searchText, allowOverlap = true )
so that overlapping solutions are (not) counted. If the searchText is empty, it should return 0. Usage examples:

searchSubstr('aa_bb_cc_dd_bb_e', 'bb') // should return 2 since bb shows up twice
searchSubstr('aaabbbcccc', 'bbb') // should return 1
searchSubstr( 'aaa', 'aa' ) // should return 2
searchSubstr( 'aaa', '' ) // should return 0
searchSubstr( 'aaa', 'aa', false ) // should return 1
*/
function searchSubstr(fullText, searchText, allowOverlap = true) {
  let counter = 0;

  for (let i = 0; i < fullText.length; i++) {
    if (
      fullText.substring(i, i + searchText.length) == searchText &&
      searchText != ""
    ) {
      counter++;
    }
    if (allowOverlap == false) {
      i += searchText.length - 1;
    }
  }
  return counter;
}
