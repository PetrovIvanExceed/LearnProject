// Напишите функцию moveElement(arr,from,to), которая позволяет поменять местами
// элементы из позиции from в позицию to.

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12, 754, 2345, 2, 8, 244,
  2545, 6, 3, 9];

moveElement = (arr, from, to) => {
  const temp = arr[to];
  arr[to] = arr[from];
  arr[from] = temp;

  return  arr;
}

const t = moveElement(array, 5, 1);
console.log(t);
