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

### Handlebars

For templating, this project uses handlebars.  In the shim config, we define both a `marionette_dist`, which is the default MarionetteJS file, and a `marionette` which is where any overrides would go.  The only example here is overriding Marionette's `compileTemplate()` as per [the marionette docs](http://marionettejs.com/docs/marionette.templatecache.html#override-template-compilation).  The same pattern of a separate `*_dist` file and regular one could also be used for backbone-relational or any other plugins.

### A command line trick

To help mimick a real server, you can use the following command line trick in python 3:

    python -m http.server 8000

Run it in the same directory as `index.html` to get a super basic webserver running.
