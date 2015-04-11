define(
    ['marionette', 'models/SomeCollection', 'views/SomeCollection'],
    function (Marionette, SomeCollection, SomeCollectionView) {
        var Router = Marionette.AppRouter.extend({
            routes: {
                '*all': 'home',
            },
            'home': function () {
                console.log('routing to home');

                var collection = new SomeCollection(InitialThings);
                var view = new SomeCollectionView({collection: collection, el: '#app-container'});
                view.render();
            }
        });

        var router = new Router();

        return router;
    });
