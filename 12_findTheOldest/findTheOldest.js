const findTheOldest = function(people) {
    const sortByAge = people
        .sort((personA,personB) => {
            
            if(personA["yearOfDeath"] === undefined){
                personA["yearOfDeath"] = 2025;
            }
            if(personB["yearOfDeath"] === undefined){
                personB["yearOfDeath"] = 2025;
            }

            const previousGuy = personA["yearOfDeath"] - personA["yearOfBirth"];
            const nextGuy = personB["yearOfDeath"] - personB["yearOfBirth"];

            return nextGuy - previousGuy;
        });

        return sortByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
