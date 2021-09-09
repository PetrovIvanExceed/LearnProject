// 1 января 2018 был понедельник. Скрипт запрашивает номер месяца (1..12) и
// число в этом месяце (1..31). Выведите имя дня недели (например, «четверг»)
// для введённого числа и месяца

function testFunc(month, day) {
  const date = new Date(2018, month - 1, day)
  switch (date.getDay()) {
    case 0:
      return 'Воскресенье';
    case 1:
      return 'Понедельник';
    case 2:
      return 'Вторник';
    case 3:
      return 'Среда';
    case 4:
      return 'Четверг';
    case 5:
      return 'Пятница';
    default:
      return 'Суббота';
  }
}

console.log(testFunc(3, 23))
