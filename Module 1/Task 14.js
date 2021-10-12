// Найти максимальный/минимальный элемент в массиве

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8, 244,
  2545, 6, 3, 9];

testFunction = (arr) => {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  }
}

const t = testFunction(array);
console.log(t);
