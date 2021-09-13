// Заполните массив следующим образом: в первый элемент запишите 'x',
// во второй 'xx', в третий 'xxx' и так далее

function testFunc(val) {
  let arr = []
  for (i = 0; i < val; i++) {
    arr.push('x'.repeat(i + 1))
  }
  return arr
}

console.log(testFunc(7))
