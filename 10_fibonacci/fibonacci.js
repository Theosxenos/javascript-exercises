const fibonacci = function(x) {
    if(Number(x) == "NaN")
    {
        return;
    }

    if(x < 0)
    {
        return "OOPS";
    }

    let fibarr = [] ;
    fibarr[0] = 0;
    fibarr[1] = 1;


    for(let i = 2; i <= x; i++)
    {
        fibarr[i] = fibarr[i-1] + fibarr[i-2];
    }

    return fibarr[x];
};

// Do not edit below this line
module.exports = fibonacci;
