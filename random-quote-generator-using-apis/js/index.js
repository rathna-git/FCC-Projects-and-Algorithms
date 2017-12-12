function getQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $(".quote-container").html("<p id='random_quote' class='lead text-center'>" + "<i class='fa fa-quote-left' aria-hidden='true'></i>" + "  " +
  response.quoteText + "<br/><p style='font-weight:bold; font-size: 22px;'>" + response.quoteAuthor + "</p></p>");
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
         $("#tumblr").attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+response.quoteAuthor +'&content=' + response.quoteText +'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
      }
  });
}

$(function() {
  getQuote();
});

$('#quote-btn').on('click',function(){
  getQuote();
});