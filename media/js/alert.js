var AlertСlass = function(el) { var self = this;
    self.alert = $(el);
    self.close = $(el).find('[data-alert-close]');
    self.text  = $(el).find('[data-alert-text]');
    self.icon  = $(el).find('[data-alert-icon]');
    self.events();
};

AlertСlass.prototype.events = function() { var self = this;
    self.close.on('click', function() {
        self.alert.remove();
    });
};

var AlertManager = new function() { var self = this;
    self.template = $('[data-alert-template]');
    self.container = $('[data-alerts]');
};

$('[data-alert]').each(function() {
    new AlertСlass(this);
});

var Alert = function(text, type) {

    var template = AlertManager.template.clone();

    template.removeAttr('data-alert-template').removeClass('template');

    var newAlert = new AlertСlass(template);

    newAlert.alert.addClass(type);
    newAlert.text.text(text);

    if (type == 'success') {
        newAlert.icon.addClass('fa-check');
    } else if (type == 'info') {
        newAlert.icon.addClass('fa-info');
    } else if (type == 'warning') {
        newAlert.icon.addClass('fa-exclamation');
    } else if (type == 'error') {
        newAlert.icon.addClass('fa-exclamation-circle');
    }

    AlertManager.container.append(newAlert.alert);
};