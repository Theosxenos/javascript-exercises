const findTheOldest = function (people) {
    let oldest = people[0];

    for (let p of people) {
        if (p.yearOfDeath === undefined) {
            p.yearOfDeath = (new Date()).getFullYear();
        }

        let page = p.yearOfDeath - p.yearOfBirth;
        let oage = oldest.yearOfDeath - oldest.yearOfBirth;

        if (page > oage) {
            oldest = p;
        }
    }

    return oldest;
};

const findTheOldest2 = (people) => {
    people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
