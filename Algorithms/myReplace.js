function myReplace(str, before, after) {

  var fob = before.charAt(0);

  if(fob === fob.toUpperCase()){

    after = after.charAt(0).toUpperCase() + after.slice(1);

  }

  str = str.replace(before, after);

  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");


//returns "He is Sitting on the couch"
