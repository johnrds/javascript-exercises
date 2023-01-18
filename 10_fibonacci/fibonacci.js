const fibonacci = function(int) {
    if (isNaN(int) || int<0) return 'OOPS';

    let result = [1,1];
    if (int === 0) return 0;
    for(let i=2; i<int; i++){
        result.push(result[i-1]+result[i-2]);
    };
    return result[int-1];
};

// Do not edit below this line
module.exports = fibonacci;
