define(['marionette', 'views/Something'], function (Marionette, SomethingView) {

    var SomeCollectionView = Marionette.CollectionView.extend({
        childView: SomethingView
    });

    return SomeCollectionView;

});
