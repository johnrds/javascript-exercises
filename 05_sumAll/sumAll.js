const sumAll = function (intOne, intTwo) {
    if (typeof (intOne) !== 'number' || intOne < 0) return 'ERROR';
    if (typeof (intTwo) !== 'number' || intTwo < 0) return 'ERROR';

    if (intOne > intTwo) {
        const tempIntOne = intOne;
        intOne = intTwo;
        intTwo = tempIntOne;
    };

    let result = 0;
    for (let i = intOne; i <= intTwo; i++) {
        result += i;
    };
    return result;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
