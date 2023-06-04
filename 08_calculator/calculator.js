const add = function(addNum1, addNum2) {
	return addNum1 + addNum2;
};

const subtract = function(subNum1, subNum2) {
	return subNum1 - subNum2;
};

const sum = function(array) {
    let newSum = 0;
	array.forEach(element => {
        newSum += element;
    })
    return newSum;
};

const multiply = function(array) {
    let multiplyResult = 1;
    array.forEach(element => {
        multiplyResult *= element;
    })
    return multiplyResult;
};

const power = function(num, powerOf) {
    let answer = num;
    for (let i = 1; i < powerOf; i++) {
        answer *= num;
    }
    return answer;
};

const factorial = function(num) {
    let i = 0;
    let answer = 1;
    if (num === 0) {
        return 1;
    }
    do {
        i++;
        answer *= i;
    } while (i < num);
    return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
