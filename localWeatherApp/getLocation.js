
function success(pos) {
    
  console.log('Your current position is:');
  console.log('Latitude : ' + pos.coords.latitude);
  console.log('Longitude: ' + pos.coords.longitude);
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error);
