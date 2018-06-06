//gets info from calc.html and assigns id a variable
var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var operator=document.getElementById("operator");
var calculate=document.getElementById("calculate");
var displayNew=document.getElementById("displayNew");


calculate.addEventListener("click",function(){ 
    //makes the numbers the use imputs numbers (not a string thanks to the "+", another way to do it is parseInt())
    var number1 = +num1.value;
    var number2 = +num2.value;
    var op = operator.value;
    
    //adds the two numbers 
    if (op === "+"){
        displayNew.innerHTML = number1 + number2;
    }
    
    //subtracts the two numbers
    else if(op === "-"){
        displayNew.innerHTML = number1 - number2;
    }
    
    //multiplies the two numbers
    else if(op === "*"){
        displayNew.innerHTML = number1 * number2;
    }
    
    //divides the two numbers
    else if(op === "/"){
        displayNew.innerHTML = number1 / number2;
    }
    
    //exponential-- the first number is the base and the second number is the power
    else if(op === "^"){
        displayNew.innerHTML = Math.pow(number1, number2);
    }
});

calculate.addEventListener("click", function(){
    if (num1.value===""){
        alert("needs first input");
    }
    
    if (num2.value===""){
        alert("needs second input");
    } 
});