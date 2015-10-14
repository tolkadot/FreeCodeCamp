//a140a065ea1765a092c1c17444450de4
//"http://api.openweathermap.org/data/2.5/weather?lat=" + lat + " &lon=" + lon + "&APPID=a140a065ea1765a092c1c17444450de4"
function getWeather() {

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  navigator.geolocation.getCurrentPosition(success, error); //get browser location & send the results to success() or error()

  function success(pos) {
    var lon = Math.round(pos.coords.longitude);
    var lat = Math.round(pos.coords.latitude);

    var req = new XMLHttpRequest(); //
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=a140a065ea1765a092c1c17444450de4", false); //format the API request URL
    req.send(); //send API request
    console.log(lon, lat);
    console.log(req.status);
    console.log(req.statusText);
    console.log(req.responseText);
    var responseArr = JSON.parse(req.responseText); //parse the response
    console.log(responseArr);
    var tempKelvins = Math.round(responseArr.main.temp); //get the temperature data.
    var iconID = (responseArr.weather[0].icon); //get the icon ID **** required
    var location = (responseArr.name); //get the location ID **** required
    var tempCelsius = Math.round(tempKelvins - 273.15); //tempCelsius *** required
    var tempFarenheit = Math.round(((tempKelvins - 273) * 1.8) + 32); //tempFaren *** required

    console.log(tempKelvins, tempCelsius, tempFarenheit, iconID, location);
    
    $(document).ready(function(){
      
      $("#location").text(location);
       $("#temperatureC").text(tempCelsius);
      $("#temperatureF").text(tempFarenheit);
      $("#icon").attr('src', "http://openweathermap.org/img/w/" + iconID + ".png");
    });
  }
}

getWeather();
