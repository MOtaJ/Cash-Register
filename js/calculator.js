
console.log('calculatorjs executed');

function calculatorModule(x) {
  /* var _memory = 0;
  var _total = 0;
  
  //var newTotal = 0;

    function load(x) {
    _total = x;
    }

     function getTotal() {
      return _total;
    }

    function loadMemory(x){
      _memory = _total;
    }

    function getMemory(){
      return _memory;

    }

    function clearMemory(){
      _memory= 0;
    }

   function getOperator (){
      return operator;
    }

    function loadOperator(x){
      operator = x;

    }

    */

    function add(x, y){
      if(typeof x === 'number' && typeof y === 'number'){
        return parseFloat(x) + parseFloat(y);
      } else {
        throw new Error();
      }

    }

    function subtract(x,y){
        if(typeof x === 'number' && typeof y === 'number'){
          return parseFloat(x) - parseFloat(y);
        } else {
          throw new Error();
        }
      }


    function multiply(x,y){
       if(typeof x === 'number' && typeof y === 'number'){
          return parseFloat(x) * parseFloat(y);
        } else {
          throw new Error();
         }
      }


    function divide(x,y){
       if(typeof x === 'number' && typeof y === 'number'){
          return parseFloat(x) / parseFloat(y);
        } else {
          throw new Error();
         }
      }



   return {
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide

   };
}


