var Post = function(el) { var self = this;

    self.form = $(el);
    self.textarea = self.form.find('[data-post-textarea]');

    autosize(self.textarea);

    self.events();

};

Post.prototype.events = function() { var self = this;

    self.textarea.on('focus', function() {
        self.form.addClass('opened').addClass('focused');
        autosize.update(self.textarea);
    }).on('blur', function() {
        if (!$.trim(self.textarea.val())) {
            self.form.removeClass('focused');
        }
    });

    self.form.on('submit', function(e) {
        if (!$.trim(self.textarea.val())) {
            e.preventDefault();
        }
    });

    $document.bind('click', function(e) {
        if ($(e.target).closest(self.form).length === 0 && $(e.target).closest('[data-button-answer]').length === 0) {
            if (!$.trim(self.textarea.val())) {
                self.form.removeClass('opened');
                self.textarea.val('');
                autosize.update(self.textarea);
            }
        }
    });

};

$('[data-post]').each(function() {
    new Post(this);
});