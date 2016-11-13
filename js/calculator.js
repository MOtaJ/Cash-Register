
function calculatorModule(x) {
  let memory = 0;
  let total = 0;
  let calculator = {

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
      return total
    }
}
