function translatePigLatin(str) {
 var vowels = ["a", "e" , "i" , "o" , "u"];

        if(vowels.indexOf(str.charAt(0)) !== -1) {
           str += 'way';

        } else {

           str = str.split(/([aeiou].*)/);
           str = str[1]+str[0]+'ay';

        }

  return str ;
}

translatePigLatin("india");
//indiaway
