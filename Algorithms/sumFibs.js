function sumFibs(num) {
var s = [],total=1;
  s[0]= 0;
  s[1]= 1;

  for(i=2;i<=num;i++){
    s[i] = s[i-2] + s[i-1];
    if(s[i] % 2 != 0 && s[i] <= num){
      total += s[i];
    }
  }
  return total;
}


sumFibs(10);
//returns 10 (sum of 1,1,3,5)
