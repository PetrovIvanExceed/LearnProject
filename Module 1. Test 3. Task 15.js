let array = [1, 19, 13, 15, 17, 31, 51, 71, 41, 613];

function testFunc(arr) {
  return arr.every(elem => elem % 2)
}

console.log(testFunc(array))
