
function calculatorModule(x) {
  let memory = 0;
  let total = 0;
  let calculator = {
    add: add,
  }

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

var myCalc = calculatorModule();

console.log(calculatorModule);