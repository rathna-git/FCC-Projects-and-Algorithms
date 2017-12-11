
function destroyer(arr ) {


  // Remove all the values

  var newArray = [];
    newArray = Array.from(arguments);
    newArray = newArray.splice(1, arguments.length);


  var newList = arr.filter(function(x){
   return newArray.indexOf(x) < 0;
});

return newList;


}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//returns [1,1]
