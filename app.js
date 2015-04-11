requirejs.config({
    baseUrl: 'js',
    paths: {
        app: './app',
        models: 'app/models',
        views: 'app/views',
        jquery: 'lib/jquery-2.1.3',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        marionette_dist: 'lib/backbone.marionette',
        marionette: 'app/marionette',
        handlebars: 'lib/handlebars-v3.0.0'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette_dist: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Backbone.Marionette'
        }
    }
});

requirejs(['app/main'], function (app) {
    app.start();
});
