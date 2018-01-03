function uniteUnique(arr) {
 var countedArgs = Array.from(arguments);
  var newArr = [];

  for(i=0; i < countedArgs.length; i++){
    for(j=0; j < countedArgs[i].length; j++){
      if(!newArr.includes(countedArgs[i][j])){
        newArr.push(countedArgs[i][j]);
      }
    }
  }

  return newArr;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

//returns [1,2,3,5,4,6,7,8]
