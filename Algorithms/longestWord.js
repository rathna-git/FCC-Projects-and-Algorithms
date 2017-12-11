function findLongestWord(str) {
 var longest= 0;
  var newStr=[];
  newStr = str.split(" ");

  for ( i=0; i < newStr.length; i++){

    if(newStr[i].length > longest) {
      longest = newStr[i].length;

    }

  }

   return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
