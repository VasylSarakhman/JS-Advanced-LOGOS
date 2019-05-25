let getId = x => document.getElementById(x);

function User(login, pass, email) {
    this.login = login,
        this.pass = pass,
        this.email = email
}

let usersBase = []
let form = document.forms['reg'];
let tab = document.getElementsByClassName('contentTable');
let tableContainer = getId('container');

function createTable() {
    usersBase = JSON.parse(localStorage.getItem(`Users`))
    let table = document.createElement("table");
    table.classList.add('contentTable');
    tableContainer.appendChild(table);
    let j = 1;
    for (let i = 0; i < usersBase.length; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let td = document.createElement('td');
        td.innerHTML = j;
        j++;
        tr.appendChild(td);
        td = document.createElement('td');
        let us = JSON.parse(localStorage.getItem(`Users`, JSON.stringify(usersBase)))
        td.innerHTML = us[i].login;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = us[i].pass;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = us[i].email;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = `<input type='button' value='Edit' id=${i} class="btn btn-warning">`;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = `<input type='button' value='Delete' id=${i} class="btn btn-danger">`;
        tr.appendChild(td);
    }
    if (tab.length > 1) {
        tableContainer.removeChild(tab[0]);
    }
}
form.addBtn.addEventListener('click', function () {
    let user = new User(form.login.value, form.pass.value, form.email.value);
    form.reset()
    usersBase.push(user);
    localStorage.setItem(`Users`, JSON.stringify(usersBase))

    createTable();
})
let option;
tableContainer.addEventListener('click', function () {
    if (event.target.value == 'Delete') {
        localStorage.getItem(`Users`, JSON.stringify(usersBase))
        usersBase.splice(event.target.id, 1);
        localStorage.setItem(`Users`, JSON.stringify(usersBase))
        createTable();
    }
    if (event.target.value == 'Edit') {
        option = event.target.id;
        form.login.value = usersBase[option].login;
        form.pass.value = usersBase[option].pass;
        form.email.value = usersBase[option].email;
        form.editBtn.classList.remove('displayNone');
        form.addBtn.classList.add('displayNone');
    }
    if (event.target.value == 'Delete' && usersBase.length == 0) {
        form.editBtn.classList.add('displayNone');
        form.addBtn.classList.remove('displayNone');
        form.reset();
    }
})

form.editBtn.addEventListener('click', function () {
    usersBase[option].login = form.login.value;
    usersBase[option].pass = form.pass.value;
    usersBase[option].email = form.email.value;
    createTable();
    form.reset();
    form.editBtn.classList.add('displayNone');
    form.addBtn.classList.remove('displayNone');
})