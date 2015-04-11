define(['marionette'], function (Marionette) {

    var SomethingView = Backbone.Marionette.ItemView.extend({
        template: "#something_tmpl"
    });

    return SomethingView;

});
