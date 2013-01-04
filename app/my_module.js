define([
    'jquery',
    'text!templates/my_module.html' // Chargement d'un template grace au plugin text de RequireJS
], function($, template) {

    return {
        renderHtml: function() {
            $("body").append(template);
        }
    };

});
