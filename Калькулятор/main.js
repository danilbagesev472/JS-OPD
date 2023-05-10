//Поле в котором все выводится
let input = document.querySelector('.input');
let power = "";
//Вставить символ
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
//Очистить все поле
function clean() {
    input.textContent = "0";
    power = "";
}
//Удалить символ
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}
//Посчитать выражение
function equal() {
    let exp = input.textContent;
    if (exp) {
        input.textContent = eval(exp);
    }
}
//Вычислить проценты
function percent() {
    input.textContent = eval(input.textContent) / 100;
}
//Для добавления констант
function constant(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == "pi")
        input.textContent += Math.PI.toFixed(5);
}
//Корень квадратный
function operation(name) {
  if (name == "sqrt")
      input.textContent = Math.sqrt(eval(input.textContent));
}
//Факториал числа
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function factor() {
    input.textContent = factorial(+eval(input.textContent));
}
//Логарифмы
function log(name) {
    if (name == 'lg') {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(5);
    }
}
