// Дана строка. Заменить все символы 'a' и 'b' на 'A' и 'B' соответственно

let string = 'abcetgbabctest'

function testFunc(str) {
  return str.replace('a', 'A').replace('b', 'B')
}

console.log(testFunc(string))
