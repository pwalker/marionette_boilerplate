define(['backbone', './Something'], function (Backbone, Something) {

    var SomeCollection = Backbone.Collection.extend({
        model: Something,
        comparator: 'someAltID',
    });
    
    return SomeCollection;
    
});