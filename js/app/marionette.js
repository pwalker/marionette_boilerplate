/*
 * This file will be where we override some Marionette things at a site wide level, I think...
 */

define(['marionette_dist', 'handlebars'], function (Marionette, Handlebars) {

    console.log("about to override template cache");

    Marionette.TemplateCache.prototype.compileTemplate = function (rawTemplate, options) {
        // use Handlebars.js to compile the template
        return Handlebars.compile(rawTemplate);
    }

    return Marionette;
});