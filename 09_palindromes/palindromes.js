const palindromes = function (palindrome) {
    const regex = /[^a-zA-Z]/g;
    let strpalstripped = palindrome.replaceAll(regex,"");
    let strpallowered = strpalstripped.toLowerCase();
    let strpallreversed = strpallowered.split('').reverse();

    strpallreversed = strpallreversed.join('');

    return strpallowered == strpallreversed;
};

// Do not edit below this line
module.exports = palindromes;
