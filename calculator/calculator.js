var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var operators = ['-', '+', '×', '÷', '='];
var sum = [];
var result; 
var subArr =[];
var strArr;
var disp = document.getElementById("display");

var updateInput = function(num) {
subArr.push(num);
    strArr = subArr.join('');
    subArr = strArr.split();
    disp.innerHTML = subArr;
    console.log(subArr);
}

var updateSum = function(oper) {
 sum.push(subArr);
    subArr = [];
    strArr = [];
    sum.push(oper);
    disp.innerHTML = oper;
    console.log(sum, subArr);
}

var equals = function(){
sum.push(subArr);
   // console.log(sum);
    for(i=0; i<=sum.length; i++){
    if(sum.length >= 3 ){
  result = inThree(Number(sum[0]), sum[1], Number(sum[2]));
      //  console.log(result);
        sum.splice(0, 3);
        sum.unshift(result);
      //  console.log(sum); 
        
    }
    }
    disp.innerHTML = result;
    subArr = [];
    sum =[];
    updateInput(result);
}

function clear(){
     disp.innerHTML = " ";
    sum = [];
    result = 0;
    subArr = [];
}

function inThree(A, B, C) {
//    console.log(A, B, C);
    var ans;
    switch (B) {
        case "+":
            return A + C ;
        case "-":
            return A-C;
        case "*":
            return A*C;
        case "/":
            return A/C;
        default:
            return A;
    }
  
}



// 1. Create the button
var button1 = document.createElement("button");
button1.innerHTML = numbers[1];
var button2 = document.createElement("button");
button2.innerHTML = numbers[2];
var button3 = document.createElement("button");
button3.innerHTML = numbers[3];

var buttonPlus = document.createElement("button");
buttonPlus.innerHTML = operators[1];
var buttonMinus = document.createElement("button");
buttonMinus.innerHTML = operators[0];


var buttonEquals = document.createElement("button");
buttonEquals.innerHTML = operators[4];
var buttonClear = document.createElement("button");
buttonClear.innerHTML = " CE ";

// 2. Append somewhere
var row1 = document.getElementById("row1");
row1.appendChild(button1);
row1.appendChild(button2);
row1.appendChild(button3);

row2.appendChild(buttonPlus);
row2.appendChild(buttonMinus);
//row2.appendChild(buttonMul);
//row2.appendChild(buttonDiv);

row2.appendChild(buttonEquals);
row3.appendChild(buttonClear);


// 3. Add event handler
button1.addEventListener("click", function(){updateInput(numbers[1])}, false);
button2.addEventListener("click", function(){updateInput(numbers[2])}, false);
button3.addEventListener("click", function(){updateInput(numbers[3])}, false);

buttonMinus.addEventListener("click", function(){updateSum(operators[0])}, false);
buttonPlus.addEventListener("click", function(){updateSum(operators[1])}, false);
//buttonMul.addEventListener("click", function(){updateSum(operators[2])}, false);
//buttonDiv.addEventListener("click", function(){updateSum(operators[3])}, false);

buttonEquals.addEventListener("click", equals, false);
buttonClear.addEventListener("click", clear, false);
