var Fixed = function(el) { var self = this;

    self.block = $(el);
    self.header = $('[data-header]');

    self.siblingsHeight = 0;

    self.block.siblings().each(function() {
        self.siblingsHeight += $(this).outerHeight(true);
    });

    self.events();

};

Fixed.prototype.events = function() { var self = this;

    $window.on('load resize', function () {
        if (self.block.outerHeight(true) + self.header.outerHeight(true) + self.siblingsHeight > $window.height()) {
            self.block.removeClass('fixed');
        } else {
            self.block.addClass('fixed');
        }
    });

};

$('[data-fixed]').each(function() {
    new Fixed(this);
});