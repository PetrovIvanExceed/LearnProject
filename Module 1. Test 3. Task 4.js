let array = [2, 8, 9, 5, 4, 2, 7, 4, 12, 5, 2, 8,
  244, 5];

testFunction = (arr, val) => {
  let count = array.filter(value => value === val);
  return count.length
}

const t = testFunction(array, 5);
console.log(t);
