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

testFunction = (arr, val) => {
  collectionArr.forEach(item => {
    if(item.age > val) {
      console.log(item)
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

const t = testFunction(collectionArr, 4);
console.log(t);
