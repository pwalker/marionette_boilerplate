define(['marionette', 'models/SomeCollection'], function(Marionette, SomeCollection) {
   var Router = Marionette.AppRouter.extend({
       routes: {
           '*all': 'home',
       },
       'home': function(){
           console.log('routing to home');
           
           debugger;
           var collection = new SomeCollection();
           // TODO add some elements
           var view = new SomeCollectionView({collection: collection});
       
           // add some more elements
       }
   });
   
   var router = new Router();
   
   return router;
});