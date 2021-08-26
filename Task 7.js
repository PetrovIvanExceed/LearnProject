// Вывод всех элементов, где совпадает сразу несколько значений из массива


  let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8, 244, 2545, 6, 3, 9];
let collectionArr = [
  {
    name: 'test',
    age: 9
  },
  {
    name: 'rest',
    age: 89
  },
  {
    name: 'west',
    age: 23
  },
  {
    name: 'test',
    age: 34
  }
]

testFunction = (arr, val, val2) => {
  arr.forEach(value => {
  if(value > val || value >val2) {
    console.log(value)
  }
  })
}

lengthFunction = (arr) => {
  let count = 0;

  arr.forEach((value, index) => {
    count = index + 1;
  });

  return count;
}

const t = testFunction(array, 4, -1);
console.log(t);
