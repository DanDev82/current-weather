$(document).ready(function(){
  $('.jumbotron').hide();
  $('.jumbotron').show('slow');
  
  
    $("#btn").click(function(){
        $(".weather-data").show(500);
        getWeather();
    });
  
    $("#f").click(function() {
      $(".tempF").css('display', 'block');
      $("#f").css('background', '#708090');
      $('#c').css('background', '#ACACAC');
      $(".tempC").css('display', 'none');
    });
    $("#c").click(function() {
      $(".tempC").css('display', 'block');
      $("#c").css('background', '#708090');
      $('#f').css('background', '#ACACAC');
      $(".tempF").css('display', 'none');
    });
 }); 
function getWeather(){

var latLong = ""; 

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
     latLong = position.coords.latitude + "," + position.coords.longitude;
    });
  }
  if(latLong == ""){
    latLong = prompt("Please enter your zip code");
    } 
   
  
  
var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/2277d4c6ff6e02fd/conditions/q/" + latLong + ".json", false);
weather.send(null);

var r = JSON.parse(weather.response);
var dis = "Current location: " + r.current_observation.display_location.full + "<br>";
var far = r.current_observation.temp_f + " F&deg;" + "<br>";
var cel = r.current_observation.temp_c + " C&deg;" + "<br>";
var windDir = r.current_observation.wind_dir;
var windSpd = r.current_observation.wind_mph;
document.getElementById('loc').innerHTML = dis;
document.getElementById('far').innerHTML = far;
document.getElementById('cel').innerHTML = cel;  
document.getElementById('windDir').innerHTML = windDir;
document.getElementById('windSpd').innerHTML = windSpd;

}