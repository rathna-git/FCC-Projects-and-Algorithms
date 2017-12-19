$(document).ready(function() {
  getData();

  $("#all").on("click", function() {
    $(this).addClass("active");
    $("#online, #offline").removeClass("active");

    $(".stream-container").removeClass("hidden");
  });

  $("#online").on("click", function() {
    $(this).addClass("active");
    $("#all, #offline").removeClass("active");

    $(".online").removeClass("hidden");
    $(".offline").addClass("hidden");
  });

  $("#offline").on("click", function() {
    $(this).addClass("active");
    $("#all, #online").removeClass("active");

    $(".offline").removeClass("hidden");
    $(".online").addClass("hidden");
  });
});

var channels = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];

function getData() {
  channels.forEach(function(channel) {
    $.ajax({
      url: "https://wind-bow.gomix.me/twitch-api/streams/" + channel,
      dataType: "jsonp",
      success: function(data) {
        if (data.stream === null) {
          $(".main-container").append(
            "<div class='row stream-container offline'><div class='icon-circle'><img src='https://cdn1.iconfinder.com/data/icons/unique-round-blue/93/user-256.png' alt='icon'></div><div class='info-container'><p class='stream-info'>" +
              channel +
              "</p></a><div class='status'><p class='stream-info'>Offline</p></div></div></div>"
          );
        } else {
          $(".main-container").append(
            "<div class='row stream-container online'><div class='icon-circle'><img src='" +
              data.stream.channel.logo +
              "'alt='icon'></div><div class='info-container'><a href='" +
              data.stream.channel.url +
              "'target ='_blank'><p class='stream-info'>" +
              channel +
              "</p></a><div class='status'><p class='stream-info'>" +
              data.stream.game +
              "-" +
              data.stream.channel.status +
              "</p></div></div></div>"
          );
        }
      }
    });
  });
}