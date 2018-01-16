function smallestCommons(arr) {

  var max= Math.max(arr[0],arr[1]);
  var min= Math.min(arr[0],arr[1]);
  var multpl = max;

  for(i = max; i >= min; i--){
    if(multpl % i !== 0){
      multpl += max;
      i = max;
    }
  }


  return multpl;
}

smallestCommons([1,5]);
//returns 60
