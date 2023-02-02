const sumAll = function(n1, n2) {

    if(!Number.isInteger(n1) || !Number.isInteger(n2))
    {
        return "ERROR";
    }
    if(n1 < 0 || n2 < 0)
    {
        return "ERROR";
    }

    let i = n1 < n2 ? n1 : n2;
    let x = n1 < n2 ? n2 : n1;

    let sum = 0;
    for(; i <= x; i++)
    {
        sum += i;
    }

    return sum;

};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
