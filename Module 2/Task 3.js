// Дана строка. Если символы в ней упорядочены по алфавиту, то вывести 'yes',
// иначе 'no'.

let text = 'Abcdefz'

function orderedWords(str) {
  if (str.toLowerCase() == str.toLowerCase().split('').sort().join('')) {
    return 'yes'}
  return 'no'
}

console.log(orderedWords(text))
