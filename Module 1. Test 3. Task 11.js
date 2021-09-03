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
    trigger: 'Alex',
    country: 'RF'
  }
];

const testFunction = (arr, obj) => {
  return arr.filter(item => {
      for(const key of Object.keys(obj)) {
        if(obj[key] === item[key]) {
          return true
        }
      }
    }
  )}

const t = testFunction(array, ({name: 'Alex', country: 'RF'}))
console.log(t);
