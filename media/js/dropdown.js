var Dropdown = function(el) { var self = this;
    self.container = $(el);
    self.call = self.container.find('[data-dropdown-call]');
    self.window = self.container.find('[data-dropdown-window]');
    self.events();
};

Dropdown.prototype.events = function() { var self = this;

    self.call.on('click', function() {
        DropdownManager.closeAll(self);
        self.window.toggle();
        self.call.toggleClass('active');
    });

    $document.on('click keydown', function(e) {
        if ((!e.keyCode && $(e.target).closest('[data-dropdown-call], [data-dropdown-window]').length == 0) || e.keyCode === 27) {
            self.call.removeClass('active');
            self.window.hide();
        }
    });

};

var DropdownManager = new function() { var self = this;

    self.objects = [];

    self.closeAll = function(object) {
        $.each(self.objects, function() {
            if (this != object) {
                this.call.removeClass('active');
                this.window.hide();
            }
        });
    };

};

$('[data-dropdown]').each(function() {
    DropdownManager.objects.push(new Dropdown(this));
});