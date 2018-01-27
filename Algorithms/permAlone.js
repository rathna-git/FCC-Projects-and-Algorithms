function permAlone(str) {
  var n = str.length;
  var arr = str.split('');
  var c = [], count= 0;

  function checkRepeats(x){
    return /(.)+\1/g.test(x.join(''));
  }


 //Heaps algorithm non-recursive format
  for(i=0;i<n;i++){
    c[i] = 0;
  }

  checkRepeats(arr) ? null : count++;

  var i=0;
  while(i<n){
    if(c[i] < i){
      if(i % 2 == 0){
        [arr[0], arr[i]] = [arr[i], arr[0]];
      } else {
        [arr[c[i]], arr[i]] = [arr[i], arr[c[i]]];
      }
      checkRepeats(arr) ? null : count++;
      c[i] += 1;
      i = 0;
    } else {
      c[i]=0;
      i++;
    }

  }

  return count;
}

permAlone('aab');
//returns 2
