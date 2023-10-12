const removeFromArray = function(array, ...theArgs) {
    return array.filter(item => !theArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
