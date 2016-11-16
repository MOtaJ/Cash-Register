

// console.log('cash_register');
var calculator = calculatorModule();
var operator = "";
var displayedNum = 0;
var storedNum = 0;
var drawer = 0;

function clearDisplay(){
 document.getElementById("display").innerHTML = '';
}



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
  var divide = parseFloat(document.getElementById('display').innerHTML);
  storedNum = divide;
  clearDisplay();
  operator = 'divide';
 }); 

document.getElementById("multiplybtn").addEventListener('click', function(){ 
  var multiply = parseFloat(document.getElementById('display').innerHTML);
  storedNum = multiply;
  clearDisplay();
  operator = 'multiply';
 }); 

document.getElementById("subtractbtn").addEventListener('click', function(){
  var subtract = parseFloat(document.getElementById('display').innerHTML);
  storedNum = subtract;
  clearDisplay();
  operator = 'subtract';
 }); 

document.getElementById("addbtn").addEventListener('click', function(){ 
  var add = parseFloat(document.getElementById('display').innerHTML);

  storedNum = add;
  clearDisplay();
  operator = 'add';
 }); 


document.getElementById("btndeposit").addEventListener('click', function(){ 
  storedNum = parseFloat(document.getElementById('display').innerHTML);
  drawer += storedNum;
  clearDisplay();
 }); 


document.getElementById("btnwithdraw").addEventListener('click', function(){ 
   storedNum = parseFloat(document.getElementById('display').innerHTML);
 document.getElementById('display').innerHTML = drawer -= storedNum;
  clearDisplay();
 }); 


document.getElementById("btndec").addEventListener('click', function(){
  document.getElementById("display").innerHTML += '.';
 }); 

document.getElementById("clear").addEventListener('click', function(){
  document.getElementById("display").innerHTML = '';
 });





document.getElementById("btnequal").addEventListener('click', function(){ 
    var result = '';
    document.getElementById('display');
    displayedNum = parseFloat(document.getElementById('display').innerHTML);

    switch(operator){
      case 'add':
      result = calculator.add(storedNum, displayedNum);
      break;

      case 'subtract':
      result = calculator.subtract(storedNum, displayedNum);
      break;

      case 'multiply':
      result = calculator.multiply(storedNum, displayedNum);
      break;

      case 'divide':
      result = calculator.divide(storedNum, displayedNum);
      break;
    }

    document.getElementById('display').innerHTML= result;
}); 

document.getElementById("balance").addEventListener('click', function(){
storedNum = parseFloat(document.getElementById('display').innerHTML);
document.getElementById('display').innerHTML= drawer;
 
 }); 


/* document.getElementById("btnequal").addEventListener('click', function(){ console.log(calculator.getTotal(),calculator.getOperator());
  document.getElementById("display").innerHTML = '=';
 });  */




















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