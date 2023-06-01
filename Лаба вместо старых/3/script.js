let farm = []; // массив для всех животных на ферме
let userWater = prompt("Введите количество воды в литрах");

// создаем классы животных
class Animal {
constructor(name, age) {
this.name = name;
this.age = age;
this.children = []; // массив для детей
}
reproduce() {
let numChildren = Math.floor(Math.random() * 4); // случайное количество детей от 0 до 3
for (let i = 0; i < numChildren; i++) {
let child = new this.constructor( // создаем новый экземпляр наследованного класса
this.name + "-child" + i, // добавляем уникальное имя ребенка
0 // ребенок всегда новорожденный
);
this.children.push(child); // добавляем ребенка в массив детей
farm.push(child); // добавляем ребенка в массив всех животных на ферме
}
}
}

class Cat extends Animal { // наследуем класс Animal для кошек
constructor(name, age) {
super(name, age); // вызываем конструктор родительского класса
this.type = "Cat";
}
meow() {
alert("Мяу!");
}
}

class Dog extends Animal { // наследуем класс Animal для собак
constructor(name, age) {
super(name, age); // вызываем конструктор родительского класса
this.type = "Dog";
}
bark() {
alert("Гав!");
}
}

class Cow extends Animal { // наследуем класс Animal для коров
constructor(name, age) {
super(name, age); // вызываем конструктор родительского класса
this.type = "Cow";
}
moo() {
alert("Муу!");
}
}

// создаем несколько животных
let fluffy = new Cat("Fluffy", 3);
farm.push(fluffy); // добавляем в массив всех животных
let spot = new Dog("Spot", 5);
farm.push(spot);
let bessie = new Cow("Bessie", 10);
farm.push(bessie);

// размножаем животных
fluffy.reproduce();
spot.reproduce();
bessie.reproduce();

// выводим информацию о всех животных
for (let animal of farm) {
console.log(`${animal.type} "${animal.name}", возраст: ${animal.age}, дети: ${animal.children.map(child => child.name).join(", ")}`);
}

// выводим количество воды пользователя
console.log(`Количество воды пользователя: ${userWater} литров`);

