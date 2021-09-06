let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8, 244,
  2545, 6, 3, 9];

function testFunc(arr) {
  return arr.reduce(function(highestIndex, element, index, array){
    return element > array[highestIndex] ? index : highestIndex;
  }, 0);
}

console.log(testFunc(array));
