function convertHTML(str) {
  // &colon;&rpar;
  var newStr;

   newStr = str.replace(/[^a-zA-Z\s]/g, function(e){
    var replacer;

    switch(e){
       case '&':
         replacer = '&amp;';
        break;
       case '<':
       replacer = '&lt;';
        break;
       case '>':
        replacer = '&gt;';
        break;
       case "'":
       replacer = '&apos;';
        break;
       case '"':
        replacer = '&quot;';
        break;
    }

    return replacer;
  });


  return newStr;
}

convertHTML('Stuff in "quotation marks"');

// returns Stuff in &quot;quotation marks&quot;
