
function success(pos) {  
  var long = Math.round(pos.coords.longitude);
  var lat = Math.round(pos.coords.latitude);

}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error);

http://api.openweathermap.org/data/2.5/weather?lat=45&lon=56

var xhr = new XMLHttpRequest() ;

xhr.open("GET" , "http://api.openweathermap.org/data/2.5/weather?lat=37&lon=144", false );
xhr.send();

// Add your code above this line!

console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr);

