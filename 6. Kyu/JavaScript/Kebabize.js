"use strict";
/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/
function kebabize(str) {
  return str
    .replace(/[0-9]/g, "")
    .replace(/([a-z])([A-Z])/g, "$1" + "-" + "$2")
    .replace(/([A-Z])([A-Z])/g, "$1" + "-" + "$2")
    .toLowerCase();
}
