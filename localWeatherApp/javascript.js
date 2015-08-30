
function success(pos) {  
  var long = Math.round(pos.coords.longitude);
  var lat = Math.round(pos.coords.latitude);

}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error);


var req = new XMLHttpRequest() ; //

req.open("GET" , "http://api.openweathermap.org/data/2.5/weather?lat=37&lon=144", false );
req.send();v

console.log(req.status);
console.log(req.statusText);

var responseArr = JSON.parse(req.responseText);
var tempKelvins = responseArr.main.temp;
