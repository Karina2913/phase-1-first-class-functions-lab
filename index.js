const returnFirstTwoDrivers = function(namesOfDrivers) {
    let namesOfDriversArray = namesOfDrivers.slice(0,2);
    return namesOfDriversArray;
}

const returnLastTwoDrivers = function(namesOfDrivers) {
    let namesOfDriversArray = namesOfDrivers.slice(2);
    return namesOfDriversArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function() {
        return int*int;
    }
}

const fareDoubler = function (fare) {
    return fare*2;
}

const fareTripler = function(fare) {
    return fare*3;
}

function selectDifferentDrivers(namesOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(namesOfDrivers);
}