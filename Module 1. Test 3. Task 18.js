let array= [-1, -2, -3, -4, 7]
function testFunc(arr, val) {
  return(arr.some(elem => elem === val))
}
console.log(testFunc(array, -3))
