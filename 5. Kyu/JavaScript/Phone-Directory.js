"use strict";
/*
John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.

Unfortunately everything is mixed, things are not always in the same order; parts of lines are cluttered with non-alpha-numeric characters (except inside phone number and name).

Examples of John's phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a phone number num returns a string for this number : "Phone => num, Name => name, Address => adress"

Examples:
s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
It can happen that there are many people for a phone number num, then return : "Error => Too many people: num"

or it can happen that the number num is not in the phone book, in that case return: "Error => Not found: num"
*/
function phone(strng, num) {
  let splittedAndFiltered = strng.split("\n").filter((x) => x.includes(num));
  let sol = "";
  if (splittedAndFiltered.length == 0) {
    return `Error => Not found: ${num}`;
  } else if (splittedAndFiltered.length > 1) {
    return `Error => Too many people: ${num}`;
  } else {
    let entry = splittedAndFiltered[0];
    let name = entry.match(/<.*>/)[0];
    entry = entry.replace(name, "");
    name = name.replace(/[<>]/g, "");
    let number;
    let adress;

    if (entry.includes("+" + num)) {
      entry = entry.replace("+" + num, "");
    } else {
      entry = entry.replace(num, "");
    }
    number = num;
    adress = entry
      .trim()
      .replace(/[\;\/\$\*/?\,\:]/g, "")
      .replace(/\_/g, " ")
      .trim();
    sol = `Phone => ${number}, Name => ${name}, Address => ${adress}`;
  }
  return sol.replace(/\s+/g, " ");
}
