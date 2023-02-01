const reverseString = function(string)
{
    let stringlength = string.length;
    let reversedsring = "";
    for(let i = 1; i <= stringlength; i++)
    {
        reversedsring += string.substr(-i, 1);
    }

    return reversedsring;
};

// Do not edit below this line
module.exports = reverseString;
