"use strict";
/*
Your task is to convert a given number into a string with commas added for easier readability. The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. There does not need to be a comma at the end of the number.

You will receive both positive and negative numbers.

Examples
commas(1) == "1"
commas(1000) == "1,000"
commas(100.2346) == "100.235"
commas(1000000000.23) == "1,000,000,000.23"
commas(-1) == "-1"
commas(-1000000.123) == "-1,000,000.123"
*/
function commas(n) {
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  if (n.toString().indexOf(".") != -1) {
    if (n.toString().split(".")[1].length == 2) {
      return separator(n.toFixed(2));
    } else {
      let str = separator(n.toFixed(3));
      if (str.endsWith("0")) {
        return str.substring(0, str.length - 1);
      }
    }
    return separator(n.toFixed(3));
  }
  return separator(n);
}
