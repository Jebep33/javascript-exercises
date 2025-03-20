const palindromes = function (str) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    let cleanStr = str
        .toLowerCase()
        .split('')
        .filter(char => characters.includes(char))
        .join('');

    let reverseStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reverseStr;

};

// Do not edit below this line
module.exports = palindromes;
