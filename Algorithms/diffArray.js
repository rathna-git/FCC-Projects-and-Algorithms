function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

 function findDiff(first,second){

     for (var i in first){
        if(second.indexOf(first[i]) === -1){
          newArr.push(first[i]);
        }
     }

 }

  findDiff(arr1,arr2);
  findDiff(arr2,arr1);

  return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//returns ["pink wool"]
