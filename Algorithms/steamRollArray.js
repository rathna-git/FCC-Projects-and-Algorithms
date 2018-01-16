function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr=[] ;

  function flatten(arg){
    if(!Array.isArray(arg)){
      newArr.push(arg);
    } else {
      for(var i in arg){
        flatten(arg[i]);
      }
    }
  }

  arr.forEach(flatten);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
//returns [1,2,3,4]
