var lat //declare  global variables to be used in API URL
var lon
 
function getCoords(){

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error); //get browser location & send the results to success() or error()


function success(pos) {  
   lon = Math.round(pos.coords.longitude);
   lat = Math.round(pos.coords.latitude);
   
var req = new XMLHttpRequest() ; //
req.open("GET" , "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + " &lon=" + lon, false); //format the API request URL
req.send(); //send API request
console.log(lon, lat);
console.log(req.status);
console.log(req.statusText);
console.log(req.responseText);
var responseArr = JSON.parse(req.responseText); //parse the response
console.log(responseArr);
var tempKelvins = Math.round(responseArr.main.temp); //get the temperature data.
var tempCelsius = Math.round(tempKelvins- 273.15);
var tempFarenheit =  Math.round(((tempKelvins - 273) * 1.8 ) + 32);

console.log(tempKelvins,tempCelsius, tempFarenheit );


}
}

getCoords();
var req = new XMLHttpRequest(); //

