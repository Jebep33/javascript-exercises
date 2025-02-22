const repeatString = function(str,ctr) {
    let word = ''; 

    if (ctr < 0) return "ERROR";

    for(let i=0;i < ctr;i++){        
        word += str;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
