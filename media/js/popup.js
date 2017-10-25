var Popup = function(el) { var self = this;

    self.call = $(el);
    self.wrapper = $('#' + self.call.data('popup'));
    self.content = self.wrapper.find('[data-popup-content]');
    self.close = self.wrapper.find('[data-popup-close]');
    self.state = ['opened', 'closed'][1];

    self.events();
};

Popup.prototype.show = function() { var self = this;

    self.wrapper.show();
    $body.addClass('popup-opened');
    $body.css('padding-right', getScrollBarWidth());
    $header.css('padding-right', getScrollBarWidth());
    self.state = 'opened';

    var elementToFocus = self.content.find('input:visible:first');

    if (!elementToFocus.length) {
        elementToFocus = self.content.find('textarea:visible:first');
    }

    elementToFocus.focus();

};

Popup.prototype.hide = function() { var self = this;
    self.wrapper.hide();
    $body.removeClass('popup-opened');
    $body.css('padding-right', 0);
    $header.css('padding-right', 0);
    self.state = 'closed';
};

Popup.prototype.events = function() { var self = this;

    self.call.on('click', function() {
        PopupManager.closeAll(self);
        self.show();
    });

    self.close.on('click', function() {
        self.hide();
    });

    $document.on('click keydown', function(e) {
        if ((!e.keyCode && $(e.target).closest('[data-popup], [data-popup-content]').length == 0) || e.keyCode === 27) {
            self.hide();
        }
    });

};

var PopupManager = new function(el) { var self = this;

    self.objects = [];

    self.closeAll = function(object) {
        $.each(self.objects, function() {
            if (this != object) {
                this.hide();
            }
        });
    };
};

$('[data-popup]').each(function() {
    PopupManager.objects.push(new Popup(this));
});