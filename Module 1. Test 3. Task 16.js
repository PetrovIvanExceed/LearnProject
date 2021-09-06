let array= [-1, -2, -3, -4, 7]
function testFunc(arr) {
  console.log(arr.some(elem => elem >= 0))
  return arr.filter(item => item >= 0)
}

console.log(testFunc(array))
