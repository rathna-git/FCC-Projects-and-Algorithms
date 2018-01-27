function pairwise(arr, arg) {
  var newArr=[];

  for (i=0; i<arr.length; i++){
    for (j =i+1 ; j < arr.length; j++){
      if (newArr.indexOf(i) == -1 && newArr.indexOf(j) == -1) {

        if (arr[i] + arr[j] === arg ){
          newArr.push(i);
          newArr.push(j);
          break;
        }
      }
    }
  }

  var value = newArr.reduce(function(a,b){
    return a+b;

  },0);

  return value;
}

pairwise([1, 1, 1], 2);
// returns 1
