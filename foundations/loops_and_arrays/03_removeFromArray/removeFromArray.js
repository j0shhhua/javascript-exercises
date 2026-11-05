const removeFromArray = function(arr, num) {
    let idx = arr.indexOf(num);
    return arr.splice(idx,1);
};

// Do not edit below this line
module.exports = removeFromArray;
