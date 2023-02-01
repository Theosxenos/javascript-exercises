const repeatString = function(string, num) {
    
    if(num < 0)
    {
        return 'ERROR';
    }
    
    let finalstring = "";
    for (let i = 0; i < num; i++)
    {
        finalstring += string;
    }

    return finalstring;
};

// Do not edit below this line
module.exports = repeatString;
