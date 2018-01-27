function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr= [];

  for (i=0; i<arr.length; i++){
    newArr.push(calculateOrbPeriod(arr[i]));
  }


  function calculateOrbPeriod(obj){

  var satRadius = earthRadius + obj.avgAlt;
   // Formula is 2PI*sqrt(satRadius to the power of 3/GM)
  var orbPeriod = Math.round(2 * Math.PI*(Math.sqrt(Math.pow(satRadius,3)/GM)));

  delete obj.avgAlt;
  obj.orbitalPeriod = orbPeriod;

  return obj;
  }



  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
//returns [{name: "sputnik", orbitalPeriod: 86400}]
