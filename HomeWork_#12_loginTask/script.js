let getId = id => document.getElementById(id);

function login() {
    let emailValue = getId('emailLog').value;
    let passValue = getId('passwordLog').value;
    let users = JSON.parse(localStorage.getItem('users'));
    if (emailValue && passValue) {
        if (users) {
            if (users.find(x => x.email === emailValue && x.password === passValue)) {
                getId('userLogin').innerHTML = getId('emailLog').value
                getId('userCard').style.display = 'block';
                getId('loginForm').style.display = 'none';
                getId('emailLog').value = '';
                getId('passwordLog').value = '';
                return;
            } else {
                alert('You have problem with email or password')
            }
        } else {
            alert('localstorage is empty')
        }
    } else {
        alert('write email and pass')
    }
}

function registration() {
    let emailValue = getId('emailReg').value;
    let passValue = getId('passwordReg').value;
    let users = JSON.parse(localStorage.getItem('users'))
    if (emailValue && passValue) {
        if (users) {
            if (users.find(x => x.email === emailValue)) {
                getId('emailReg').value = '';
                getId('passwordReg').value = '';
                alert('This email already registred')
                return;
            }
            users.push({
                email: emailValue,
                password: passValue
            })
        } else {
            users = [{
                email: emailValue,
                password: passValue
            }]
        }
        localStorage.setItem('users', JSON.stringify(users))
        getId('emailReg').value = '';
        getId('passwordReg').value = '';
    } else {
        alert('Write validate email and password')
    }
}


function goToLogin() {
    getId('loginForm').style.display = 'block';
    getId('regForm').style.display = 'none';
}

function goToReg() {
    getId('regForm').style.display = 'block';
    getId('loginForm').style.display = 'none';

}

function logOut() {
    getId('userCard').style.display = 'none';
    getId('loginForm').style.display = 'block';
}