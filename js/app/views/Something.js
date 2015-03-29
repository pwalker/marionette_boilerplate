define(['marionette'], function (Marionette) {
    
    var SomeCollectionView = Backbone.Marionette.ItemView.extend({
        template: "#something_tmpl"
    });
    
    return SomeCollectionView;
    
});
