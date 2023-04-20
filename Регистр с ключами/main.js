
const USER_LS_Reg = 'currentUserNameReg';
const USER_LS_Log = 'currentUserNameLog';
const USER_LS_Reg_Password = 'currentUserRegPassword';
const USER_LS_Log_Password = 'currentUserLogPassword';


document.getElementById("Cnopka").onclick = function(){
	const UserName = document.getElementById("UserName").value;
	const NewPassword = document.getElementById("NewPassword").value;
    saveUsersReg(UserName); saveUsersRegPassword(NewPassword);
	if (UserName == "" && NewPassword == ""){
		alert("Заполните поле")
	}
	else if (UserName == ""){
		alert("Заполните поле Имя")
	}
	else if (NewPassword == ""){
		alert("Заполните поле пароля")
	}
	else{
		const name = ("Имя: " + UserName + "\nПароль: " + NewPassword + "\nВы зарегесрированы, теперь войдите в аккаунт")
		alert(name)
	}
} 
document.getElementById("cnopka").onclick = function(){
	const login = document.getElementById("login").value;
	const password = document.getElementById("password").value;
	saveUsersLog(login); saveUsersLogPassword(password);
	if (login === UserName.value && password === NewPassword.value){
		console.log("Вы авторезированы.")
    }
	else if (login == "" && password == ""){
		alert("Заполните поле")
	}
	else if (login == ""){
		alert("Заполните поле Имя")
	}
	else if (password == ""){
		alert("Заполните поле пароля")
	}
	else{
		alert("Введите данные на которые вы зарегерестрировалиь, или зарегестрирутесь если вы этого не делали")
	}
}
function saveUsersReg(text){
    localStorage.setItem(USER_LS_Reg, text);
    console.log("Имя Регистрации: " + localStorage.getItem(USER_LS_Reg))
}
function saveUsersRegPassword(text){
    localStorage.setItem(USER_LS_Reg_Password, text);
    console.log("Пароль Регистрации: " + localStorage.getItem(USER_LS_Reg_Password))
}

function saveUsersLog(text){
    localStorage.setItem(USER_LS_Log, text);
    console.log("Имя Входа: " + localStorage.getItem(USER_LS_Log))
}
function saveUsersLogPassword(text){
    localStorage.setItem(USER_LS_Log_Password, text);
    console.log("Пароль Входа: " + localStorage.getItem(USER_LS_Log_Password))
}

