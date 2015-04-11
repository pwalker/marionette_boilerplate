define(['backbone'], function (Backbone) {

    var makeId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    var Something = Backbone.Model.extend({
        idAttribute: 'someAltID',

        defaults: function () {
            return {
                value: 'This is the value',
                someAltID: makeId()
            }
        }
    });

    return Something;

});
