define(['marionette'], function(Marionette) {
   var Router = Marionette.AppRouter.extend({
       routes: {
           '*all': 'home',
       },
       'home': function(){
           console.log('routing to home');
       }
   });
   
   var router = new Router();
   
   return router;
});