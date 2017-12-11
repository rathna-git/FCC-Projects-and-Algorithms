
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];

  for (i=0,j=0; i<arr.length; i+=size,j++){

    newArr[j] = arr.slice(i, i+size);

  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//returns [["a", "b"], ["c", "d"]]
