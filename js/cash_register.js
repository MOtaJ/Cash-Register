
var displayNum = 0;

function AddDigit(x) {     //ADD A DIGIT TO DISPLAY (kept as 'Current')
       if (eval(displayNum) == 0)
        && (displayNum.indexOf(".") == -1)
           { displayNum = x;
           } else
           { displayNum = displayNum + x;
           };
    }; };
   document.Calculator.Display.value = displayNum;
 }