
function pairElement(str) {
  str=str.split('');
  var newArr = [];

  for( var i=0; i<str.length; i++ ) {
  newArr.push( [] );
}

   for ( i=0;i<str.length;i++){

    switch(str[i]){
      case "A":
        newArr[i][0] = str[i] ;
        newArr[i][1] = "T";
        break;
        case "T":
        newArr[i][0] = str[i];
        newArr[i][1] = "A";
        break;
        case "C":
        newArr[i][0] = str[i];
        newArr[i][1] = "G";
        break;
        case "G":
       newArr[i][0] = str[i];
        newArr[i][1] = "C";
        break;
        case "A":
        newArr[i][0] = str[i];
        newArr[i][1] = "T";
        break;
    }

   }
  return newArr;
}

pairElement("ATCGA");
//returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]];
