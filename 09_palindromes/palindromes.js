const palindromes = function (string) {
    let forwardArray = string.toLowerCase().replace(/[^a-z]/g,'').split('');
    let backwardArray = string.toLowerCase().replace(/[^a-z]/g,'').split('').reverse();

    for(let i=0; i<forwardArray.length; i++){
        if (forwardArray[i] === backwardArray[i]) {
            continue;
        } else {return false};
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;