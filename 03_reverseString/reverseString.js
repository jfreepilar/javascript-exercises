const reverseString = function(string) {
    let splitString = string.split("");
    let reversedString = splitString.reverse();
    let joinedString = reversedString.join("");
    return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
