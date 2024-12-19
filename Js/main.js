let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let passInput = document.getElementById('password');
let signUpBtn = document.getElementById('SignUpBtn');
let signIn = document.getElementById('signIn');
let signUp = document.getElementById('signUpLink');
let login = document.getElementById('Log');
let emailLogin = document.getElementById('emailLogin');
let passwordLogin = document.getElementById('passwordLogin');
let Logout = document.getElementById('logOut');

let personInfo = [];
if (localStorage.getItem('info') != null) {
    personInfo = JSON.parse(localStorage.getItem('info'));
}

function newPerson() {
    let person = {
        personName: nameInput.value,
        personEmail: emailInput.value,
        personPass: passInput.value
    };
    personInfo.push(person);
    localStorage.setItem('info', JSON.stringify(personInfo));
}

signUpBtn.addEventListener('click', function () {
    document.getElementById('error').innerHTML = "";
    document.getElementById('note').innerHTML = "";
    if (nameInput.value == "" || emailInput.value == "" || passInput.value == "") {
        document.getElementById('error').innerHTML = "All inputs are required";
    } else {
        let emailExists = false;
        for (let i = 0; i < personInfo.length; i++) {
            if (emailInput.value == personInfo[i].personEmail) {
                emailExists = true;
                break;
            }
        }
        if (emailExists) {
            document.getElementById('note').innerHTML = "Email already exists";
        } else {
            newPerson();
            document.getElementById('error').innerHTML = "";
            document.getElementById('note').innerHTML = "";
        }
    }
});

signIn.addEventListener('click', function () {
    document.getElementById('Login').style.display = 'block';
    document.getElementById('signUp').style.display = 'none';
});

signUp.addEventListener('click', function () {
    document.getElementById('Login').style.display = 'none';
    document.getElementById('signUp').style.display = 'block';
});

login.addEventListener('click', function () {
    document.getElementById('loginError').innerHTML = "";
    document.getElementById('inputsError').innerHTML = "";
    if (emailLogin.value == "" || passwordLogin.value == "") {
        document.getElementById('loginError').innerHTML = "All inputs are required";
    } else {
        let loginSuccess = false;
        for (let i = 0; i < personInfo.length; i++) {
            if (personInfo[i].personEmail == emailLogin.value && personInfo[i].personPass == passwordLogin.value) {
                document.getElementById('Login').style.display = 'none';
                document.getElementById('nav').style.display = 'flex';
                document.getElementById('msg').style.display = 'block';
                document.getElementById('welcome').innerHTML = "Welcome " + personInfo[i].personName;
                loginSuccess = true;
                break;
            }
        }
        if (!loginSuccess) {
            document.getElementById('inputsError').innerHTML = "Incorrect email or password";
        }
    }
});

Logout.addEventListener('click',function(){
    document.getElementById('Login').style.display = 'block';
    document.getElementById('nav').style.display = 'none';
    document.getElementById('msg').style.display = 'none';
    document.getElementById('welcome').innerHTML = "";
})
