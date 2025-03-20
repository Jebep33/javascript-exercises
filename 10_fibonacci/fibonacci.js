const fibonacci = function(ctr) {
    currNum = 0;
    nextNum = 1;
    result = 0;

    if(ctr<0) return 'OOPS';
    
    for(i = 0; i < ctr; i++){
        result = nextNum + currNum;
        currNum = nextNum;
        nextNum = result;
    }
    return currNum;

};

// Do not edit below this line
module.exports = fibonacci;
