// Отсортировать массив чисел по возрастанию или убыванию

let array = [5, -1, 4, 8, -13, 0];

function sortFunc (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a должно быть равным b
  return 0;
}
