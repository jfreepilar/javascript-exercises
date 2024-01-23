const repeatString = function(string, times) {
    let userString = "";
    for (let i = 0; i < times; i++) {
        userString += string;
    }
        if (times < 0) {
            return "ERROR";
        }
    return userString;  
};
const number = Math.floor(Math.random() * 1000)



repeatString("hey", 3);

repeatString("Hello", 20);

repeatString("Joeffrey", 1);

repeatString("Jeanin", 0);

repeatString("How are you?", -1);

repeatString("", 10); // blank string

repeatString("Hi", number);



// Do not edit below this line
module.exports = repeatString;
