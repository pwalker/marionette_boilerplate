define(['backbone', 'marionette', 'app/router'], function (Backbone, Marionette, router) {
    var App = Marionette.Application.extend({
        initialize: function (options) {
            console.log('initializing app');
            console.log(options);
        }
    });

    var app = new App();

    app.on('start', function () {
        app.Router = router;
        Backbone.history.start();
    });

    return app;

});
