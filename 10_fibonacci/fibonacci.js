const fibonacci = function(position) {
    if (position < 1) {
        return "OOPS";
    } else if (position == 1) {
        return 1;
    }

    let firstValue = 0;
    let secondValue = 1;
    let current;

    for (let i = 2; i <= position; i++) {
        current = firstValue + secondValue;
        firstValue = secondValue;
        secondValue = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
