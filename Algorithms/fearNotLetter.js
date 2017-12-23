
function fearNotLetter(str) {
  var newStr='';


  var first = str.charCodeAt(0);
  var last = str.charCodeAt(str.length-1);

  for (var i=first;i<=last;i++){
    if(str.indexOf(String.fromCharCode(i)) === -1){
      newStr += String.fromCharCode(i);
      return newStr;
    }

  }


  return undefined;
}

fearNotLetter("abcdefghjklmno");
// returns i
