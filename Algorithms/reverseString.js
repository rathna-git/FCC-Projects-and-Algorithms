
function reverseString(str) {
  var newStringArr = [];

  newStringArr = str.split("");

  newStringArr = newStringArr.reverse();

  newStringArr = newStringArr.join("");

  return newStringArr;

}

reverseString("hello");
