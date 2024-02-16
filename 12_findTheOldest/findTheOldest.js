const findTheOldest = function(people) {
    checkIfStillAlive(people);
    for (let i = 0; i < people.length; i++) {
        let yearsLived = people[i].yearOfDeath - people[i].yearOfBirth;
        people[i].age = `${yearsLived}`;
    }
        people.sort((a, b) => b.age - a.age);
        return people[0];
};

function checkIfStillAlive(people) {
    for (let i = 0; i < people.length; i++) {
    if (!people[i].hasOwnProperty('yearOfDeath')) {
        let currentYear = parseInt((new Date()).getFullYear()); console.log(currentYear)
        people[i].yearOfDeath = `${currentYear}`; console.log(people)
        }
    }
}    

// Do not edit below this line
module.exports = findTheOldest;
