// Строка состоит из слов, разделенных одним или несколькими пробелами.
// Найдите слово наибольшей длины

let string = 'text education exceed.team part 2 for test'

function testFunc(str) {
  return str.split(' ').reduce(function(accum, curr) {
    return curr.length > accum.length ? curr : accum
  }, '')
}

console.log(testFunc(string))
