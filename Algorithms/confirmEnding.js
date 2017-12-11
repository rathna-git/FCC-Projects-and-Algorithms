
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcon

  if (str.substr(-target.length) == target){
    return true;
    }
    return false;



}

confirmEnding("Bastian", "n");
//returns true
