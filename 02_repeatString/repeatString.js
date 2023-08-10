const repeatString = function (string,num) {
    if (num < 0) {
        return "ERROR";
    }

    let constructedString = "";
    for (let i = 0; i < num; i++) {
        constructedString += string;
    }
    return constructedString;
};

// Do not edit below this line
module.exports = repeatString;
