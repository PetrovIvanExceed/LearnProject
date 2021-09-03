let array = [
  {
    name: 'Alex'
  },
  {
    name: 'Alex'
  },
  {
    name: 'Gleb'
  },
  {
    name: 'Alex'
  }
];

testFunction = (arr, val) => {
  // return arr.filter(value == val)
  let i = 0;
  return arr.filter(value =>
    JSON.stringify(value) === JSON.stringify(val));
}

const t = testFunction(array, ({name: 'Alex'}))
console.log(t);
