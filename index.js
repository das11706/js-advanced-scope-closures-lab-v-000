
// produceDrivingRange() - Returns a function that then calculates whether a given trip is within range.
// For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance
// and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate
// if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.


function produceDrivingRange(blockRange){
  return function(start, end){
    let tripDistance = Math.abs(parseInt(start) - parseInt(end));
      if (tripDistance > blockRange){
       return `${tripDistance - blockRange} blocks out of range`;
    } else {
       return `within range by ${blockRange - tripDistance}`;
    }
  }
}



// let eightBlockRange = produceDrivingRange(8)
// expect(eightBlockRange('10th', '20th')).to.equal('2 blocks out of range')
// expect(eightBlockRange('10th', '14th')).to.equal('within range by 4')
