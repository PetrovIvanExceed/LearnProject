// Дана строка. Определить, содержит ли строка только символы 'a', 'b', 'c' или нет

let string = 'abcbacabcbcabcbaba'

function testFunc(str) {
  let result = str.split('')
  return result.every(elem =>
    elem === 'a' || elem === 'b' || elem === 'c')
}

console.log(testFunc(string))
