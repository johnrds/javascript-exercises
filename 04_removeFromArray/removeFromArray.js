const removeFromArray = function() {
    const valuesToRemove = Array.from(arguments);
    const myArray = valuesToRemove.shift();

    for(let i=0; i<valuesToRemove.length; i++){
        const valueIndex = myArray.indexOf(valuesToRemove[i]);
        if (valueIndex === -1) continue;
        myArray.splice(valueIndex,1);
    };
    return myArray
};

console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));

// Do not edit below this line
module.exports = removeFromArray;
