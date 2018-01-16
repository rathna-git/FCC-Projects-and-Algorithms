function dropElements(arr, func) {
  // Drop them elements.
  var newArr=[];
  for(i=0;i<arr.length;i++){
    if(func(arr[i])){
      newArr=arr.splice(i);

    }

  }
  return newArr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
//returns [1,2,3]
