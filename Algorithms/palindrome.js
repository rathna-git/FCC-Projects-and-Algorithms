
function palindrome(str) {
  // Good luck!
  var newString = [];

  newString = str.replace(/[\W_]/g,'').toLowerCase().split('');

  for(i=0, strLength = newString.length; i <= strLength; i++){
    if (newString[i] == newString[strLength-1]){
        strLength -= 1;
    }   else {
      return false;
    }

  }

  return true;

}



palindrome("eye");
