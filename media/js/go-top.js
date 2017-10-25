var GoTop = new function() { var self = this;

    self.button = $('[data-go-top]');

    $window.on('load scroll', function() {
        if ($window.scrollTop() > 0) {
            if (self.button.is(':hidden')) {
                self.button.fadeIn(150);
            }
        } else {
            self.button.fadeOut(150);
        }
    });

    $document.on('click', '[data-go-top]', function() {
        $window.scrollTop(0);
    });

};