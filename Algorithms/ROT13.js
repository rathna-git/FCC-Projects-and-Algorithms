function rot13(str) { // LBH QVQ VG!
  var newStr= "";
  var newchar="";

  for (i=0; i<str.length; i++){

    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) <= 90){
      newchar = str.charCodeAt(i) + 13;

      if ( newchar > 90){
        newchar = (newchar - 90) + 64;
      }

      newStr  += String.fromCharCode(newchar);

    } else {
      newStr += str[i];
    }
  }

  return newStr;

}

// Change the inputs below to test
rot13("LBH QVQ VG!");
//returns "YOU DID IT"
