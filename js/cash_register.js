

var calculator = calculatorModule();
 display= 0;
 document.getElementById("btn1").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 1;
 });

 btn2.addEventListener('click', function() {display.innerHTML += 2;});
 btn3.addEventListener('click', function() {display.innerHTML += 3;});
 btn4.addEventListener('click', function() {display.innerHTML += 4;});
 btn5.addEventListener('click', function() {display.innerHTML += 5;});
 btn6.addEventListener('click', function() {display.innerHTML += 6;});
 btn7.addEventListener('click', function() {display.innerHTML += 7;});
 btn8.addEventListener('click', function() {display.innerHTML += 8;});
 btn9.addEventListener('click', function() {display.innerHTML += 9;});
 btn0.addEventListener('click', function() {display.innerHTML += 0;});
 btn00.addEventListener('click', function() {display.innerHTML += 00;});
 

 add.addEventListener('click', add(Display));