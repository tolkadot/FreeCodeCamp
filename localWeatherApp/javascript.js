

var lat
var long 

function success(pos) {  
   long = Math.round(pos.coords.longitude);
   lat = Math.round(pos.coords.latitude);

}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error); //get browser location & send the results to success() or error()


var req = new XMLHttpRequest() ; //

req.open("GET" , "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lat , false );
req.send();

console.log(req.status);
console.log(req.statusText);

var responseArr = JSON.parse(req.responseText);
var tempKelvins = Math.round(responseArr.main.temp);
var tempCelsius = Math.round(tempKelvins- 273.15);
var tempFarenheit =  Math.round(((tempKelvins - 273)* 1.8 ) + 32);

console.log(tempKelvins,tempCelsius, tempFarenheit );
