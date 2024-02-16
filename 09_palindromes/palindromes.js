    const palindromes = (...args) => {
    const cleanedString = args.map(arg => removePunctuation(
                                        removeNumber(
                                        removeWhiteSpace(arg)))
                                        .toLowerCase()); console.log(cleanedString)
    const reversed = reverseEachIndex(cleanedString)
    console.log(reversed);

    for (let i = 0; i < cleanedString.length && i < reversed.length; i++) {
    if (cleanedString[i] !== reversed[i]) {
        return false; // If any corresponding characters are not equal, strings are not palindromes
            }
        }  
        return true; // If the loop completes without returning false, the strings are palindromes
    };


function removeNumber(string) {
    const newString = string.replace(/\d+/g, "");
    return newString;
}

function removePunctuation(string) { 
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g; //for removing punctuations
    let newString = string.replace(punctuationRegex, "")
    return newString
};

function removeWhiteSpace (string) {
    const newString = string.replace(/\s/g, ""); 
    return newString;
}

function reverseEachIndex(arr) {
    let reversedIndex = [];
    for (let i = 0; i < arr.length; i++) {
        let reversed = arr[i]
                        .split('')
                        .reverse()
                        .join('');
        reversedIndex.push(reversed);
    }
    return reversedIndex;
}

// Do not edit below this line
module.exports = palindromes;
