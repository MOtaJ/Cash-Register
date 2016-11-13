

// console.log('cash_register');
var calculator = calculatorModule();

 document.getElementById("btn1").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 1;
 }); 

 document.getElementById("btn2").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 2;
 }); 

 document.getElementById("btn3").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 3;
 }); 

 document.getElementById("btn4").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 4;
 }); 

 document.getElementById("btn5").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 5;
 }); 

 document.getElementById("btn6").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 6;
 }); 

 document.getElementById("btn7").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 7;
 }); 

 document.getElementById("btn8").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 8;
 }); 

 document.getElementById("btn9").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 9;
 }); 

 document.getElementById("btn0").addEventListener('click', function(){
  document.getElementById("display").innerHTML += 0;
 }); 

 document.getElementById("btn00").addEventListener('click', function(){
  document.getElementById("display").innerHTML += '00';
 }); 

document.getElementById("divisionbtn").addEventListener('click', function(){
  document.getElementById("display").innerHTML += '÷';
 }); 

document.getElementById("multiplybtn").addEventListener('click', function(){
  document.getElementById("display").innerHTML += '*';
 }); 

document.getElementById("subtractbtn").addEventListener('click', function(){
  document.getElementById("display").innerHTML += '-';
 }); 

document.getElementById("addbtn").addEventListener('click', function(){
  document.getElementById("display").innerHTML += '+';
 }); 

document.getElementById("btndec").addEventListener('click', function(){
  document.getElementById("display").innerHTML += '.';
 }); 

document.getElementById("clear").addEventListener('click', function(){
  document.getElementById("display").innerHTML = '';
 }); 

 /* var display = document.getElementById('display');

 var btn2 = document.getElementById('btn2');
 btn2.addEventListener('click', function() {
  console.log("hi");
 }); */

 /* btn2.addEventListener('click', function() {display.innerHTML += 2;});
 btn3.addEventListener('click', function() {display.innerHTML += 3;});
 btn4.addEventListener('click', function() {display.innerHTML += 4;});
 btn5.addEventListener('click', function() {display.innerHTML += 5;});
 btn6.addEventListener('click', function() {display.innerHTML += 6;});
 btn7.addEventListener('click', function() {display.innerHTML += 7;});
 btn8.addEventListener('click', function() {display.innerHTML += 8;});
 btn9.addEventListener('click', function() {display.innerHTML += 9;});
 btn0.addEventListener('click', function() {display.innerHTML += 0;});
 btn00.addEventListener('click', function() {display.innerHTML += 00;}); */
 

 // add.addEventListener('click', add(Display)); 