const removeFromArray = function (numArray) {
    let i = 0;
    while (i < numArray.length) {
        let currentNum = numArray[i];
        let numberRemoved = false;
        for (let argumentIndex = 1; argumentIndex < arguments.length; argumentIndex++) {
            if (currentNum === arguments[argumentIndex]) {
                numArray.splice(i, 1);
                numberRemoved = true;
                break;
            }
        }
        if (!numberRemoved) {
            i++;
        }

    }
    return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;
