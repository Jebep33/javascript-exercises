const removeFromArray = function(arr,...args) {
    let itemCount = 0;
    let n = 1;

    // counts how many instances of each item exist in the array
    arr.forEach( index => {
        if (index === item1) itemCount++;
    });

    //finds and removes item 1
    while(n <= itemCount){
        removeItem(arr,item1);
        n++;
    }
    
    removeItem(arr,item2);
    removeItem(arr,item3);
    removeItem(arr,item4);
    removeItem(arr,item5);

    return arr;
};

function removeItem(yourArray,yourItem) {
    let position = 0;
    
    if (yourItem != null) {
        //finds and removes item
        for(let i=0;i < yourArray.length;i++) {
            if (yourItem === yourArray[i]) {
                position = i;
                yourArray.splice(position,1);
                i--;
            }
        }
    }
}

// Do not edit below this line
module.exports = removeFromArray;
