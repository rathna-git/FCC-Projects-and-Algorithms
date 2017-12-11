
function repeatStringNumTimes(str, num) {
  // repeat after me

  var newStr = "";

  for( i= 0; i < num; i ++){

      if (num > 0){
        newStr += str;
      } else {
        newStr = "";
      }
  }

  return newStr;


   //return num > 0 ? str.repeat(num) : ''; --- advanced solution
}

repeatStringNumTimes("abc", 3);
// returns abcabcabc
