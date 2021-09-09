// Обрезать строку по определенному кол-ву символов, добавив в конце '...'

let string = 'text education part 2'

function testFunc(str, end, endval) {
  return str.substring(0, end)+endval
}

console.log(testFunc(string, 6, '...'))
