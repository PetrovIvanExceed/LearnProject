const testFunction = (arr, value) => {
  let number = -1;
  arr.forEach((element, index) => {
    if(element === value) {
      number = index;
    }
  });

  return number;
}

const array1 = [5, 9, -1, -4, 9, 5, 7, 3, -4, -1, 4, 8, 9, -4, -3, -5, 8, 5, 2];
const result = testFunction(array1, 5);
console.log('result', result);
