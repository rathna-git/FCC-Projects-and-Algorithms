function addTogether() {

   function checkNum(num){
     if(typeof num !== 'number'){
       return undefined;
     } else {
       return num;
     }
   }

  if(arguments.length > 1){
     var x = checkNum(arguments[0]);
     var y = checkNum(arguments[1]);
     if(x === undefined || y === undefined){
       return undefined;
     } else {
       return x + y;
     }

  } else {
    var z = arguments[0];

    if(checkNum(z)){
      return function(arg2){
        if(z === undefined || checkNum(arg2) === undefined){
          return undefined;
        } else {
          return z + arg2;
        }
      };
    }
  }




}

addTogether(2,3);
//returns 5
