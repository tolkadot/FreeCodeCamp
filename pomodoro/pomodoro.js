var seconds = 0;
var minutes = 0;

var timer = function(){

for (counter = 0; counter < 1200; counter ++)
{
    if(counter%60 === 0)
    {
        minutes = minutes+1;
        seconds = 0+'0';
    }
    else {
minutes = Math.ceil(counter/60);
seconds = counter%60;
if(seconds < 10) {
    seconds = '0' + seconds;
}
}
console.log(minutes + ":" + seconds)
}

}


timer();
