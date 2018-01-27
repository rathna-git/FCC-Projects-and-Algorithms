function sym(args) {
  var arr = Array.from(arguments);


  function findDiff(first,second){
    var newArr=[];

    for(var i in first){
      if(second.indexOf(first[i]) === -1 && newArr.indexOf(first[i]) === -1){
        newArr.push(first[i]);
      }
    }

      for(var j in second){
        if(first.indexOf(second[j]) === -1 && newArr.indexOf(second[j]) === -1){
          newArr.push(second[j]);
        }
      }

    return newArr;
  }


    return arr.reduce(findDiff);

}

sym([1, 2, 3], [5, 2, 1, 4]);
//returns [3,5,4]
