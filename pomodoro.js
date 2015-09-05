
function countDown() {
    
    function toConsole() {
        console.log("Hello");
    }
    
    var sessionLength = 10;
    var countDownInterval = 3000; // 1 second
    
    for(i=0; i<10; i++){
    
    setInterval(toConsole(), 3000);
    }
    }
    
    countDown();
