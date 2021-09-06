let array = [1, 2, 3, -4, 7, 54, -43, 93]
function testFunc(arr) {
  return arr.filter(item => item % 2)
}

console.log(testFunc(array))
