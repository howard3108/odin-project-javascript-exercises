const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        if (!oldest.yearOfDeath) {
            oldest.yearOfDeath = new Date().getFullYear();
        } else if (!current.yearOfDeath) {
            current.yearOfDeath = new Date().getFullYear();
        }
        const getAgeOldest = oldest.yearOfDeath - oldest.yearOfBirth;
        const getAgeCurrent = current.yearOfDeath - current.yearOfBirth;
        return (getAgeOldest > getAgeCurrent) ? oldest : current;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
