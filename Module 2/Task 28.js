// Из объекта сформировать 2 массива ключи, значения

 let object = {
   name: 'test',
   age: 34,
   country: 'RF'
 }

 function testFunc(obj) {
  return [Object.keys(obj), Object.values(obj)]
 }

 console.log(testFunc(object))
