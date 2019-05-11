let User = (function () {
    let name = 'Vasyl';
    let age = 25;
    return {
        getName: function () {
            alert(name)
        },
        setName: function (newName) {
            name = newName
        },
        getAge: function () {
            alert(age)
        }
    }
}());
User.getName();
User.setName('Dasha');
User.getName();
User.getAge();