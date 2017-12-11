
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3){
    str = str.slice(0, num-3);
    str = str + "...";
  } else if (num <= 3){
    str = str.slice(0, num);
    str = str + "...";
  }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
//returns return "A-tisket..."
