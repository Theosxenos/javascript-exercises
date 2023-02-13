const findTheOldest = function(people) {
    let oldest = people[0];

    for(let p of people)
    {
        if(p.yearOfDeath === undefined)
        {
            p.yearOfDeath = (new Date()).getFullYear();
        }

        let page = p.yearOfDeath - p.yearOfBirth;
        let oage = oldest.yearOfDeath - oldest.yearOfBirth;

        if(page > oage)
        {
            oldest = p;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
