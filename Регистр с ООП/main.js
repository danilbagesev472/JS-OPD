
class User {
  constructor(name, password) {
  this.name = name;
  this.password = password;
  }
  
  register() {
  if (!this.isnameExist()) {
  const users = this.getUsers();
  users.push({ name: this.name, password: this.password });
  localStorage.setItem('users', JSON.stringify(users));
  return true;
  }
  return false;
  }
  
  login() {
  const users = this.getUsers();
  const currentUser = users.find((user) => user.name === this.name && user.password === this.password)
  if (currentUser) {
  localStorage.setItem('currentUser', this.name);
  return true;
  }
  return false;
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
    } 

  isnameExist() {
  const users = this.getUsers();
  return users.some((user) => user.name === this.name);
  }
  }
  
  
  const newUser = new User(document.getElementById('username').value, document.getElementById('password').value);
  if (newUser.register()) {
  console.log('Регистрация прошла успешно');
  } else {
  console.log('Пользователь с таким именем уже существует');
  }
  
  const loginUser = new User(document.getElementById('username').value, document.getElementById('password').value);
  if (loginUser.login()) {
  console.log('Вход выполнен успешно');
  } else {
  console.log('Неверное имя или пароль');
  }

  function Register(){
    const newUser = new User(document.getElementById('username').value, document.getElementById('password').value);
  if (newUser.register()) {
  console.log('Регистрация прошла успешно');
  } else {
  console.log('Пользователь с таким именем уже существует');
  }
}

function Login(){
  const loginUser = new User(document.getElementById('username').value, document.getElementById('password').value);
  if (loginUser.login()) {
  console.log('Вход выполнен успешно');
  } else {
  console.log('Неверное имя или пароль');
  }
}


//       .some
// const food = ['🍗' , '🍖', '🥓', '🍔', '🌯', '🧆']

//   function isPizza(item) {
//     return item === '🍕' //false
//   }

//   function isBurger(item) {
//     return item === '🍔' //true
//   }



//        .find
// const products = [1, 2, 3, 4, 5, 6, 7, 8, 5]

// const first5 = products.find((element) => element === 5) 

//      Метод массива find() вернёт первый найденный в массиве элемент, который подходит 
//      под условие в переданной колбэк-функции. Если в массиве не найдётся ни одного подходящего 
//      элемента, то вернётся значение undefined