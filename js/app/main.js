define(['backbone', 'marionette', 'app/router'], function(Backbone, Marionette, router) {
    var FlashCardApp = Marionette.Application.extend({
        initialize: function(options) {
            console.log('initializing app');
        }
    });

    var app = new FlashCardApp();

    app.on('start', function() {
        app.Router = router;
        Backbone.history.start();
    });

    return app;
});