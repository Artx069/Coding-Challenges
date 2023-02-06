"use strict";
/*
Complete the method so that it does the following:
Removes any duplicate query string parameters from the url (the first occurence should be kept)
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:
stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'
*/
function stripUrlParams(url, paramsToStrip = []) {
  let map = new Map();
  let baseUrl = url.replace(/\?.+/, "");
  let paramUrl = url.replace(/.+\?/, "");
  let strippedUrl;
  if (paramUrl.indexOf("&") != -1) {
    paramUrl.split("&").forEach((x) => {
      if (!map.has(x.charAt(0)) && paramsToStrip.indexOf(x.charAt(0)) == -1) {
        map.set(x.charAt(0), x.substring(1));
      }
    });
    let params = () => {
      let str = "";
      map.forEach((x, k) => (str += k + x + "&"));
      return str.replace(/\&$/, "");
    };
    strippedUrl = baseUrl + "?" + params();
  }
  strippedUrl = strippedUrl == undefined ? url : strippedUrl;
  return strippedUrl.replace(/\?$/, "");
}
