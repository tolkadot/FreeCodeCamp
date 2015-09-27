counter = 0;

var timer = function(){
var seconds = 0;
var minutes = 0;
var dispMin = 0;

if (counter === 121) {
     clearInterval(timerId);
    }


 if(counter<= 59){
     minutes = 0;
     dispMin = minutes + '0';
     if(counter < 10) {seconds = '0' + counter;}
     else {seconds = counter;}
 }   
 
    else if(counter%60 === 0)
    {
        minutes = counter/60;
        dispMin = minutes;
        seconds = '00';
    }
    
    else {
       
    minutes = Math.floor(counter/60);
    dispMin = minutes;
    seconds = counter%60;
    if(seconds < 10) {seconds = '0' + seconds;}
     }
     
if(minutes < 10) { dispMin = '0' + minutes;}

console.log(dispMin + ":" + seconds);
counter++;
};
 
 



//timer();

var updateDisplay = function() {
var timerId = setInterval(timer, 1000);
};

updateDisplay();
