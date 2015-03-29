## Backbone, Marionette, RequireJS, and a few others

This is a super simple boilerplate project layout for a basic [MarionetteJS](http://marionettejs.com) project with a few others involved.

I've included all the required sources instead of using a package manager so you should be able to run this app without a server, just with the `index.html` page in a browser.

This project depends on the following other projects:
- [BackboneJS](http://backbonejs.org), and thus [Underscore](http://underscorejs.org/)
- [RequireJS](http://requirejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [Bootstrap](http://getbootstrap.com/)
- [FontAwesome](http://fontawesome.io/)

Hopefully this boilerplate can help you quickly mock up some ideas, or sketch things out, and migrate on to a more mature way to manage these dependencies and serve them up.

### A command line trick

To help mimick a real server, you can use the following command line trick in python 3:

    python -m http.server 8000

Run it in the same directory as `index.html` to get a super basic webserver running.
