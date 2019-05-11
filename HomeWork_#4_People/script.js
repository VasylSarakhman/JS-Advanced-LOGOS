(function() {
    let people = {
        people: ['Sanya', 'Vasyl', 'Roman', 'Dmytro'], // масив імен
        init: function() { // функція ініціалізації роботи модуля
            this.cacheDom(); // спрацьовує функція доступів до елементів
            this.bindEvents(); // спрацьовує функція задавання подій
            this.render(); // функція обновлення сторінки
        },
        cacheDom: function() {
            this.el = $('.main');
            this.button = this.el.find('.newName');
            this.input = this.el.find('.addName');
            this.ul = this.el.find('.listName');
        },
        bindEvents: function() {
            this.button.on('click', this.addPersonName.bind(this)); // для того щоб не втратити контексти bind(this)
            this.ul.on('click', 'span.del', this.delPersonName.bind(this));
        },
        render: function() {
            this.ul.html('');
            let data = {
                people: this.people
            };
            for (let i = 0; i < data.people.length; i++) {
                this.ul.append('<li>' + data.people[i] + ' <span class="del">X</span></li>');
            }


        },
        addPersonName: function() { // функція яка вставляє в масив імені нове ім'я.
            this.people.push(this.input.val());
            this.render();
            this.input.val('');
        },
        delPersonName: function(e) { // функція видалення імені
            let remove = $(e.target).closest('li');
            let span = this.ul.find('li').index(remove);
            this.people.splice(span, 1);
            this.render();
        }

    };
    people.init(); // ініціалізація модуля
    //people.addPerson('Lololo'); // введення нового ім'я, за допомогою методу.
})();
