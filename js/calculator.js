
console.log('calculatorjs executed');

function calculatorModule(x) {

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


