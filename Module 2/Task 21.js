// Сделайте функцию inArray, которая определяет, есть в массиве элемент с
// заданным текстом или нет. Функция первым параметром должна принимать текст
// элемента, а вторым - массив, в котором делается поиск. Функция должна
// возвращать true или false.

let array = ['text', 'education', 'part', '2', 'exceed', 'team']

function inArray(text, arr) {
  return arr.includes(text)
}

console.log(inArray('test', array))
