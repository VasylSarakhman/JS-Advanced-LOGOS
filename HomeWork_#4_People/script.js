(function() {
    let people = {
        people: ['Sanya', 'Vasyl', 'Roman', 'Dmytro'],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            this.el = $('.main');
            this.button = this.el.find('.newName');
            this.input = this.el.find('.addName');
            this.ul = this.el.find('.listName');
        },
        bindEvents: function() {
            this.button.on('click', this.addPersonName.bind(this));
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
        addPersonName: function() {
            this.people.push(this.input.val());
            this.render();
            this.input.val('');
        },
        delPersonName: function(e) {
            let remove = $(e.target).closest('li');
            let span = this.ul.find('li').index(remove);
            this.people.splice(span, 1);
            this.render();
        }

    };
    people.init();
})();
