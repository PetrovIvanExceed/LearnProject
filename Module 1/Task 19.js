// Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений
// В функцию передаем массив. Нужно вернуть массив, в котором отсутствуют ложные значения

let array = [5, -7, 2, 9, 4, 2, null, 9, 4, false, 7, 4, -12, 754, '', 2, 8, 244,
  undefined, 6, 0, 9];

filterFalse = (arr) => {
  const result = [];

  arr.forEach(item => {
    if(item && item > 0) {
      result.push(item);
    }
  });
  return result;
}

const t = filterFalse(array);
console.log(t);
