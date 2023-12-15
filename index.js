// Code your solution in this file!
const returnFirstTwoDrivers = function () {
    const driversList = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return driversList.slice(0, 2);
}

const returnLastTwoDrivers = function () {
    const driversList = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return driversList.slice(-2);
}

const createFareMultiplier = function (integer) {
    return function (fare) {
        return fare * integer;
    }
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driveselector) {
    return driveselector(drivers);
}
