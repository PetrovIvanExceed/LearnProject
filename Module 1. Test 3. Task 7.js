let array = [2, 8, 9, 5, 4, 2, 7, 4, 12, 5, 2, 8, 244, 5];
const testFunction = (arr, val1, val2) => {
  let count = arr.lastIndexOf(val1)
  arr[count] = val2
  return arr
}

testFunction(array, 5, 47);
