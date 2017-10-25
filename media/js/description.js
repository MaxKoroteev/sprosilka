var Description = new function() { var self = this;

    self.description = $('[data-description]');
    self.text = $('[data-description-text]');
    self.show = $('[data-description-show]');
    self.hide = $('[data-description-hide]');

    self.init = function() {
        if (self.text.height() > 20) {
            self.description.addClass('collapsed');
            self.show.show();
        } else {
            self.description.removeClass('default');
        }
    };

    self.init();

    self.show.on('click', function() {
        self.description.removeClass('collapsed').removeClass('default');
        self.hide.show();
        self.show.hide();
    });

    self.hide.on('click', function() {
        self.description.addClass('collapsed').addClass('default');
        self.show.show();
        self.hide.hide();
    });

    $window.on('resize', function() {
        self.description.addClass('default').removeClass('collapsed');
        self.show.hide();
        self.hide.hide();
        self.init();
    });

};