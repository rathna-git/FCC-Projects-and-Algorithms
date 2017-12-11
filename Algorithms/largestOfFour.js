function largestOfFour(arr) {
 var newArr = [];

  for(i=0; i<arr.length; i++){
    var largest = 0;
    for(j=0; j<arr[i].length; j++){

      if (arr[i][j] > largest ){
        largest = arr[i][j];
      }
    }
    newArr.push(largest);
  }

  // You can do this!
  return newArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//returns [27,5,39,1001]
