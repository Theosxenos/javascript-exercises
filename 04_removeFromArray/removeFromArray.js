const removeFromArray = function(array, ...args) {
    for(let arg of args)
    {
        let argindex = array.indexOf(arg);
        if(argindex >= 0)
        {
            array.splice(argindex, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
