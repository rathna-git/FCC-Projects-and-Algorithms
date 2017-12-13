var tempUnit = 'C';
var currentTempInCelsius;

$(document).ready(function(){
  
  navigator.geolocation.getCurrentPosition(onPositionData);
  
  $(".unit").click(function () {
    var currentTempUnit = $(".unit").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $(".unit").text(newTempUnit);
    if (newTempUnit == "F") {
      var fahTemp = Math.round(parseInt($(".temp").text()) * 9 / 5 + 32);
      $(".temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $(".temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
  });
   
});



function onPositionData(position){
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  
 $.ajax({
      url: "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon,
      dataType: "jsonp",
      success: function(response){
        
           currentTempInCelsius =         Math.round(response.main.temp);
        
        $('.city_name').text(response.name); 
       $('.weather').text(response.weather[0].main);
        
        
   $('.temp').text(currentTempInCelsius + " " + String.fromCharCode(176));
        $('.unit').text(tempUnit);
        $(".icon-container").html("<i class='wi wi-night-" + response.weather[0].main + " icon'></i>");
        IconGen(response.weather[0].main);
        
        
      }
 });
}

function IconGen(desc) {
desc = desc.toLowerCase();
  switch (desc) {
    case 'drizzle':
      addIcon(desc);
      break;
    case 'clouds':
      addIcon(desc);
      break;
    case 'rain':
      addIcon(desc);
      break;
    case 'snow':
      addIcon(desc);
      break;
    case 'clear':
      addIcon(desc);
      break;
    case 'thunderstorm':
      addIcon(desc);
      break;
    default:
      $('div.clouds').removeClass('hide');
  }
}

function addIcon(desc) {
  $('div.' + desc).removeClass('hide');
}