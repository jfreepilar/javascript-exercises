const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    } else {
        const higherNum = Math.max(num1, num2);
        const lowerNum = Math.min(num1, num2);
        const range =  (higherNum - lowerNum) + 1;
        const total = [];

        for (let i = 0; i < range; i++) {
            total.push(lowerNum + i);
        }

        const sum = total.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

            return sum;
        } 
};

// Do not edit below this line
module.exports = sumAll;
