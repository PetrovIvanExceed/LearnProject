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
];

function testFunc(arr, val) {
  let result = 0;
  let i = 0;
  arr.forEach((value, index) => {
    if(value[val] > result) {
      result = value[val]
      i = index
    }
  })
  return arr[i]
}

console.log(testFunc(collectionArr, 'age'))
