const palindromes = function (string) {
    // remove all spaces and other character
    const newString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    // check first char and last char
    const newStringLen = newString.length;
    const midStr = Math.floor(newStringLen / 2);
    let answer = false;
    // if length is odd number find the middle char   (0)stats(4) midStr = 2
    for (let i = 0; i < midStr; i++) {
        answer = newString.charAt(i) === newString.charAt(newStringLen - 1 - i);
    }
    return answer;
};

// Do not edit below this line
module.exports = palindromes;
