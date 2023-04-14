const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

let arr = []
            reg.onclick = function(){
                for(let i = 0; i < arr.length; i += 2){
                    if(document.getElementById("reg_Name").value === arr[i]){
                        alert("You can't use this username")
                        return
                        }}
        if(document.getElementById("reg_Password").value.length >= 4 && document.getElementById("reg_Password").value.length <= 12) {
            arr.unshift(reg_Password.value)
            //arr.unshift(reg_Email.value)
            arr.unshift(reg_Name.value)
        } else return}
            console.log(arr) 
            log.onclick = function(){
        for(let j = 0; j < arr.length; j += 2){
             console.log(arr[j])
         if(document.getElementById("logEmail").value == arr[j]){
            if(document.getElementById("logPassword").value === arr[j+1]){
              console.log("Success")}
             else{
           console.log("Not success")}
                }
             else{
        console.log("success")}}}