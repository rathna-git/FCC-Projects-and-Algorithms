
function mutation(arr) {


 var firstElement = arr[0].toLowerCase();
 var secondElement = arr[1].toLowerCase();

  for (i=0;i< secondElement.length;i++){

    if(firstElement.indexOf(secondElement[i]) === -1)
     return false;

  }
  return true;

}

mutation(["hello", "hey"]);
//returns false
