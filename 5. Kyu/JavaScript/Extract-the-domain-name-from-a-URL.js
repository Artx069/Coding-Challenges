"use strict";
/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/
function domainName(url) {
  let split;
  if (url.indexOf("www") != -1) {
    split = url.split("www.");
  } else if (url.indexOf("//")) {
    split = url.split("//");
  }
  if (url.indexOf("www") == -1 && url.indexOf("//") == -1) {
    let split2 = url.split(".");
    return split2[0];
  }
  let split2 = split[1].split(".");

  return split2[0];
}
