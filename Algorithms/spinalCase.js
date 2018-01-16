function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

 //replaces all uppercase words with a space and lower case
  str= str.replace(/([A-Z])/g, ' $1').trim();

  //adds and replaces spaces and underscores with '-'
  str = str.replace(/\_*\s+/g, '-');

 return str.toLowerCase();

}

spinalCase("AllThe-small Things");
//returns all-the-small-things
