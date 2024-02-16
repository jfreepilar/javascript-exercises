const fibonacci = function(sequenceNumber) {
    if (sequenceNumber > 0) {
        sequenceNumber;
    } else if (typeof sequenceNumber === 'string') {
        parseInt(sequenceNumber); 
    } else if (sequenceNumber < 0) {
        return 'OOPS'; 
    }

    let checkedNumber = sequenceNumber;
    let fibonacciArray = [0,1,1]
    let newSequence = checkedNumber -2;
    for (let i = 0; i < newSequence; i++) {
    const lastArray = fibonacciArray[fibonacciArray.length - 1];
    const secondToLastArray = fibonacciArray[fibonacciArray.length - 2];
    const fibs = sum(lastArray, secondToLastArray);
    fibonacciArray.push(fibs); 
    }
    if (newSequence >= -1) {
        return fibonacciArray[fibonacciArray.length - 1]; 
    } else if (newSequence == -2) {
        return 0;
    }

    function sum(number1, number2) {
        let result = number1 + number2;
        return result;
    };
 }
// Do not edit below this line
module.exports = fibonacci;
