const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    let sum = 0;
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    let i = min;
    if (min >= 0 && max >= 0 ) {
        for (i; i <= max; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
