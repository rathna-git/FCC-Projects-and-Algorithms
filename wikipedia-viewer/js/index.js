
$(document).ready(function() {
  var entry;
  $('#input_value').focus();
  
   $('#submit').on('click',function(e){
     e.preventDefault();
     $('.list-container').hide();
     if ($('#input_value').val() == ''){
       alert('Enter article to search')
     }
     entry = $('#input_value').val();
     
      wikiViewer(entry);     
   });
});


function wikiViewer(entry) {
  
  $.ajax({
    url:
      "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" +
      entry +
      "&callback=JSON_CALLBACK",
    dataType: "jsonp",
    success: function(response) {
      
      var results = [ ];
      
      //gets values inside 'response.query.pages' key. Stores as objects
      results = Object.values(response.query.pages);
      
      //loop through results array which contain objects
      results.forEach(function(result){
       
        var pageResult = 'https://en.wikipedia.org/?curid=';
        
        $('.result-container').append('<button class="list-container"><a href="https://en.wikipedia.org/?curid=' + result.pageid +'" target ="_blank"><h3>'+  result.title + '</h3><p class="extract">' + result.extract +'</p></a></button>');
    });
      
    }
  });
  
  $('#input_value').val('');
  $('#input_value').focus();
}