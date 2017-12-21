
function convertToRoman(num) {
  var romanValues = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var decimalValues = ["1000","900","500","400","100","90","50","40","10","9","5","4","1"];

  var romanNumeral = '';

  for (var i in decimalValues){
    while(decimalValues[i] <= num){
      romanNumeral += romanValues[i];
      num -= decimalValues[i];
    }
  }


 return romanNumeral;
}

convertToRoman(36);
//returns XXXVI
