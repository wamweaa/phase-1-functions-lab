// Code your solution in this file!

function distanceFromHqInBlocks(Distance) {
    const hqDistance = 42
    return Math.abs(Distance - hqDistance)
}
function distanceFromHqInFeet(Distance) {
    const distanceBlock = distanceFromHqInBlocks(Distance);
    const feetAtEveryBlock = 264;
    return distanceBlock * feetAtEveryBlock

}
function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    const feetAtEveryBlock = 264;
    return distance * feetAtEveryBlock
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    let farePrice = 0;
    if (distance <= 400) {
        return farePrice = 0
    }
    else if (distance > 400 && distance <= 2000) {
        farePrice = (distance - 400) * (2 / 100);
        return farePrice
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25.00;
        return 25
    } else {
        return 'cannot travel that far';
    }
    return farePrice.toFixed(2);
}
