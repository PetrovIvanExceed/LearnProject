let array = [
  {
    name: 'Alex',
    age: 18
  },
  {
    nickname: 'Deny',
    gender: 'male'
  },
  {
    name: 'Gleb',
    color: 'green'
  },
  {
    name: 'Alex',
    country: 'RF'
  },
  {}
];

function testFunc(arr, val) {
  return arr.filter(item => item.name === val)
}

console.log(testFunc(array, 'Alex'))
