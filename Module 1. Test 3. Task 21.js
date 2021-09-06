let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8, 244,
  2545, 6, 3, 9];

function testFunc(arr) {
  let max = Math.max(...arr)
  let index = arr.indexOf(max, 0)
  let count = arr.filter(value => value === max).length
  return {
    max: max,
    index: index,
    count: count
  }
}

console.log(testFunc(array));
