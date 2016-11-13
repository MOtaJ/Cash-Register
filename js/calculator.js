
function calculatorModule(x) {
  var memory = 0;
  var total = 0;

    function load(x) {
    total = x;
    return total;
    }

    function getTotal(x) {
      return total;
    }

    function add(x) {
      total = total + x;
      return total;
    }

    function subtract(x) {
      total = total - x;
      return total;
    }

    function multiply(x) {
      total = total * x;
      return total;
    }

    function divide(x) {
      total = total / x;
      return total;
    }


   return {
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      load: load,
      getTotal: getTotal,

   };
}



console.log(calculatorModule);