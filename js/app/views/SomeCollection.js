define(['marionette', 'views/Something'], function (Marionette, SomethingView) {

    var SomeCollectionView = Marionette.CollectionView.extend({
        itemView: SomethingView
    });

    return SomeCollectionView;

});
    