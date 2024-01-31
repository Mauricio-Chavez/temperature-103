//!DB information



let userDB="Sens";
let passDB="Test1234";

function login(){
    let userName = prompt('Enter Your User Name:');
    let password = prompt('Enter Your Password:');
    if(userName === userDB && password === passDB){
        document.getElementById('login').innerHTML = `<h1 class='alert-success'>Welcome ${userName}</h1>`;

    }  else {
        document.getElementById('login').innerHTML = "<h1 class='alert-error'>Invalid Credentials</h1>";
    }
}