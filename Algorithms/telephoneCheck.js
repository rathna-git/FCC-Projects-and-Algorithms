function telephoneCheck(str) {
  // Good luck!
  var phoneNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/;

  return phoneNumberPattern.test(str);
}



telephoneCheck("555-555-5555");
//returns true
