function sumPrimes(num) {
  var sum=0;

  for(i=2; i<=num; i++){

     if(checkPrime(i)== true){
       sum += i;

     }
  }
  return sum;
}

  function checkPrime(number){

    for (var i=2; i<number;i++){
      if(number % i == 0){
        return false;
      }
    }
      return true;
  }


sumPrimes(10);
// returns 17
