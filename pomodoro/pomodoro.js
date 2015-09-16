var seconds = 0;
var minutes = 0;
var dispMin = 0;

var timer = function(){

for (counter = 1; counter < 180; counter ++)
{
 if(counter<= 59){
     minutes = 0;
     dispMin = minutes + '0';
     if(counter < 10) {seconds = '0' + counter;}
     else {seconds = counter;}
 }   
 
    else if(counter%60 === 0)
    {
        minutes += 1;
        seconds = 0+'0';
    }
    
    else {
       
    minutes = Math.floor(counter/60);
    dispMin = minutes;
     console.log("---");
    seconds = counter%60;
    if(seconds < 10) {seconds = '0' + seconds;}
     }
     
if(minutes < 10) { dispMin = '0' + minutes;}

console.log(dispMin + ":" + seconds);
//updateDisplay();
}

};

timer();

//var updateDisplay = function() {
//var timerId = setTimeout(timer, 1000);
//};



