
function sumAll(arr) {
  var newArray = [];

  var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});

  var min = arr.reduce(function(a, b){
    return Math.min(a,b);
  });

  for (i=min; i<=max; i++){
    newArray.push(i);
  }

  var sum = newArray.reduce(function(a,b){
    return a + b;
  }, 0);

  return sum;
}

sumAll([1, 4]);
//returns 10
