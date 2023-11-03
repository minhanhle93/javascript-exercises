const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let i  = 0; 
    let j = str.length - 1;
    while (i < j) {
        if (str[i] == str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
