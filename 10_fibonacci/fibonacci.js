const fibonacci = function(num) {
    // sum of first two number
    // given the num find the num sum
    // 1 1 2 3 5 8 13
    let num1 = 0;
    let num2 = 1;
    if (num <= 0) {return "OOPS";}
    for (let i = 1; i < num; i++) {
        const temp = num2;
        num2 += num1;
        num1 = temp;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
