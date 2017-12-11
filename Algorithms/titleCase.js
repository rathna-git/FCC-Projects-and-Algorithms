

 function titleCase(str) {
 str = str.split(' ');

  for(i=0; i < str.length; i++){

   str[i] = str[i].toLowerCase().split('');
   str[i][0] = str[i][0].toUpperCase();
   str[i] = str[i].join('');

  }

  return str.join(' ');

}

titleCase("I'm a little tea pot");
