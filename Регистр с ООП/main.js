let usernames = [];
let passwords = [];

  //Функция для регистрации
  function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

	//проверяем на похожих пользователей
    let isUsernameTaken = usernames.includes(username);

	//проверяем пароль на кол-во символов
    let isPasswordValid = password.length >= 4 && password.length <= 12;

    if (!isUsernameTaken && isPasswordValid) {
      usernames.push(username);
      passwords.push(password);
      alert("Регистрация успешно завершена!");
      console.log("Логин: " + usernames)
      console.log("Пароль: " + passwords)
    } 
	else {
		if(isUsernameTaken){
			alert("Регистрация не завершена. Ваше имя уже занято.");
		}
		else{
			alert("Регистрация не завершена. Пароль не соответствует правильности, проверьте чтобы он был не меньше 4 и не больше 12 символов!");
		}
    }
  }
  //Функция для входа
  function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let USER = 0;

	for(let i = 0; i <= usernames.length && i <= passwords.length; i++){
		if(username === usernames[i] && password === passwords[i]){
			USER = 1;
		}
	}
    if (USER === 1) {
      alert("Успешный вход!");
      console.log("Добро пожаловать " + username)
      console.log("Вот ваш пароль: " + password)
    } else {
      alert("Вход не удался. Проверьте своё имя и пароль, возможно вам придется регистрироваться.");
    }
  }